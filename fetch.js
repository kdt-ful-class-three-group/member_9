const fs = require("fs");

async function getData() {
  const newData = [];

  try {
    const res = await fetch("/dataList");
    const dataList = await res.json();

    const datalist = document.getElementById("datalist");
    datalist.innerHTML = "";

    dataList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td onclick="readModal('${item.write}')">${item.write}</td>`;
      datalist.appendChild(row);
      newData.push(item);
    });

    let jsonData = JSON.stringify(newData);
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
}

window.onload = getData;
