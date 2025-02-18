import http from "http";
import fs from "fs";

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const main = fs.readFileSync("./index.html", "utf-8");
      res.setHeader("Content-Type", "text/html");
      (res.statusCode = 200), res.end(main);
    }
  }
  if (req.method === "POST") {
  }
});

const PORT = 3005;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 구동`);
});
