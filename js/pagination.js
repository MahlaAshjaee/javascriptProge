document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("myList");
  const items = Array.from(list.getElementsByClassName("list-group-item"));
  const perPage = 6;
  const totalPages = Math.ceil(items.length / perPage);

  const showPage = (pageNumber) => {
    const start = (pageNumber - 1) * perPage;
    const end = start + perPage;
    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "block" : "none";
    });
  };

  const createPaginationButtons = () => {
    const pagination = document.getElementById("pagination");
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      const link = document.createElement("a");
      link.classList.add("page-link");
      link.href = "#";
      link.textContent = i;
      li.appendChild(link);
      pagination.appendChild(li);

      link.addEventListener("click", () => showPage(i));
    }
  };

  showPage(1);
  createPaginationButtons();
});
