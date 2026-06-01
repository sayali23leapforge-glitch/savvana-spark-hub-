import { createServer } from "node:http";
import { Readable } from "node:stream";

import app from "./dist/server/server.js";

const port = Number(process.env.PORT || 3000);

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
