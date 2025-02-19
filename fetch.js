async function getData() {
  try {
    const res = await fetch("/dataList");
    const dataList = await res.json();

    const datalist = document.getElementById("datalist");
    datalist.innerHTML = "";

    dataList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.write}</td>`;
      datalist.appendChild(row);
    });
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
}
