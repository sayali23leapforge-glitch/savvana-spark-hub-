import { createServer } from "node:http";
import { Readable } from "node:stream";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import app from "./dist/server/server.js";

const port = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientRoot = path.join(__dirname, "dist", "client");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function normalizeStaticPath(urlPathname) {
  const decoded = decodeURIComponent(urlPathname);
  const stripped = decoded.replace(/^\/+/, "");
  return path.normalize(stripped).replace(/^([.][.][/\\])+/, "");
}

async function tryServeStatic(req, res) {
  const method = req.method || "GET";
  if (method !== "GET" && method !== "HEAD") return false;

  const reqUrl = new URL(req.url || "/", `http://localhost:${port}`);
  let relativePath = normalizeStaticPath(reqUrl.pathname);
  if (!relativePath) {
    relativePath = "index.html";
  }

  let filePath = path.join(clientRoot, relativePath);

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
      await access(filePath);
    }
  } catch {
    return false;
  }

  const extension = path.extname(filePath).toLowerCase();
  res.setHeader("content-type", MIME_TYPES[extension] || "application/octet-stream");
  res.setHeader("cache-control", extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable");

  if (method === "HEAD") {
    res.statusCode = 200;
    res.end();
    return true;
  }

  const body = await readFile(filePath);
  res.statusCode = 200;
  res.end(body);
  return true;
}

function toRequest(req) {
  const method = req.method || "GET";
  const host = req.headers.host || `localhost:${port}`;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const url = `${protocol}://${host}${req.url || "/"}`;

  const init = {
    method,
    headers: req.headers,
  };

  if (method !== "GET" && method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }

  return new Request(url, init);
}

function sendResponse(nodeRes, webRes) {
  nodeRes.statusCode = webRes.status;

  webRes.headers.forEach((value, key) => {
    nodeRes.setHeader(key, value);
  });

  if (!webRes.body) {
    nodeRes.end();
    return;
  }

  Readable.fromWeb(webRes.body).pipe(nodeRes);
}

createServer(async (req, res) => {
  try {
    if (await tryServeStatic(req, res)) {
      return;
    }

    const request = toRequest(req);
    const response = await app.fetch(request, {}, {});
    sendResponse(res, response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
