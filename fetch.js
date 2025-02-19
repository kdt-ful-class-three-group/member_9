async function getData() {}
try {
  const res = await fetch("/dataList");
  const dataList = await res.json();

  const tableBody = document.getElementById("datlist");
  tableBody.innerHTML = ""; // 기존 데이터 초기화

  dataList.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
              <td>${item.write}</td>
              `;

    tableBody.appendChild(row);
  });
} catch (error) {
  console.error("데이터 가져오기 실패:", error);
}
