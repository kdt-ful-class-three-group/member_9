import http from "http";
import fs from "fs";
import qs from "querystring";

let dataList = [];

const server = http.createServer((req, res) => {
  const url = req.url;

  try {
    if (req.method === "GET") {
      console.log(url);
      if (url === "/") {
        const main = fs.readFileSync("./index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(main);
      } else if (url === "/addDataPage") {
        const addData = fs.readFileSync("./addDataPage.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(addData);
      } else if (url.endsWith(".js")) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const script = fs.readFileSync(`./${url}`);
        res.end(script);
      } else if (url.endsWith(".css")) {
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync(`./${url}`);
        res.end(css);
      } else if (url === "/dataList") {
        console.log("datalist 요청됨");
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8"
        });
        res.end(JSON.stringify(dataList));
      }
    }
  } catch {
    console.error("오류");
  }

  if (req.method === "POST") {
    if (url === "/createdDataList") {
      let list = [];

      req.on("data", (frag) => {
        list += frag;
      });

      req.on("end", () => {
        if (list) {
          const doc = qs.parse(list);
          console.log("받은 글", doc);

          dataList.push(doc);
          console.log("새 글 추가", doc);
        }
        res.writeHead(302, { Location: "/addDataPage" }); // 입력 후 새로고침
        res.end();
      });
    }
    return;
  }
});

const PORT = 3005;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 구동`);
});
