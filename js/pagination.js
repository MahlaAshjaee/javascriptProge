// document.addEventListener("DOMContentLoaded", function() {
//     const list = document.getElementById("myList");
//     const items = Array.from(list.getElementsByClassName("list-group-item"));
//     const perPage = 6; // تعداد آیتم‌ها در هر صفحه
//     const totalPages = Math.ceil(items.length / perPage); // تعداد کل صفحات
  
//     // تابعی برای نمایش صفحه مورد نظر
//     function showPage(pageNumber) {
//       const start = (pageNumber - 1) * perPage;
//       const end = start + perPage;
//       items.forEach(function(item, index) {
//         if (index >= start && index < end) {
//           item.style.display = "flex";
//         } else {
//           item.style.display ="none";
//         }
//       });
//     };
  
//     // تابعی برای ایجاد دکمه‌های صفحه‌بندی
//     function createPaginationButtons() {
//       const pagination = document.getElementById("pagination");
//       for (let i = 1; i <= totalPages; i++) {
//         const li = document.createElement("li");
//         li.classList.add("page-item");
//         const link = document.createElement("a");
//         link.classList.add("page-link");
//         link.href = "#";
//         link.textContent = i;
//         li.appendChild(link);
//         pagination.appendChild(li);
  
//         // رویداد کلیک برای نمایش صفحه مورد نظر
//         link.addEventListener("click", function() {
//           showPage(i);
//         });
//       }
//     };
  
//     // نمایش صفحه اول به صورت پیش‌فرض
//     showPage(1);
  
//     // ایجاد دکمه‌های صفحه‌بندی
//     createPaginationButtons();
//   });


document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("myList");
  const items = Array.from(list.getElementsByClassName("list-group-item"));
  const perPage = 6; // تعداد آیتم‌ها در هر صفحه
  const totalPages = Math.ceil(items.length / perPage); // تعداد کل صفحات

  const showPage = (pageNumber) => {
    const start = (pageNumber - 1) * perPage;
    const end = start + perPage;
    items.forEach((item, index) => {
      item.style.display = (index >= start && index < end) ? "block" : "none";
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