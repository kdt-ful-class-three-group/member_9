import http from "http";
import fs from "fs";

let dataList = [];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.method === "GET") {
    console.log(url);
    if (url === "/") {
      const main = fs.readFileSync("./index.html", "utf-8");
      res.writeHead(200, "Content-Type", "utf-8", "text/html");
      res.end(main);
    } else if (url.endsWith(".js")) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      const script = fs.readFileSync(`./${req.url}`);
      res.end(script);
    } else if (url.endsWith(".css")) {
      res.writeHead(200, { "Content-Type": "text/css" });
      const css = fs.readFileSync(`./${req.url}`);
      res.end(css);
    } else if (url.endsWith(".html")) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const html = fs.readFileSync(`./${req.url}`, "utf-8");
      res.end(html);
    } else if (url === "/dataList") {
      console.log("datalist 요청됨");
    }
  }
});

const PORT = 3005;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 구동`);
});
