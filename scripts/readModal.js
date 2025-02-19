function readModal(text) {
  const modal = document.getElementById("readModal");
  const modalContent = modal.querySelector("div");
  modalContent.innerHTML = `<p>${text}</p>`;

  modal.style.display = "block";
}

function closeReadModal() {
  document.getElementById("readModal").style.display = "none";
}
