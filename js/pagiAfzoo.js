

function preparePagination(showLatest = false) {
    // کد مربوط به صفحه‌بندی و نمایش مقالات
    const list = document.getElementById("myList");
    const items = Array.from(list.getElementsByClassName("list-group-item"));
    console.log("list: ",items);

    const perPage = 6; // تعداد آیتم‌ها در هر صفحه
    const totalPages = Math.ceil(items.length / perPage); // تعداد کل صفحات

    const showPage = (pageNumber) => {
        const start = (pageNumber - 1) * perPage;
        const end = start + perPage;
        items.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? "block" : "none";
        });
    };

    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; // پاک کردن دکمه‌های pagination قبلی

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
    showPage(showLatest ? totalPages : 1);
    createPaginationButtons();
}

document.addEventListener("DOMContentLoaded", () => {
    preparePagination()
});


document.getElementById('formAzoodan').addEventListener('submit', function (e) {
    // کد افزودن مقاله
    e.preventDefault();
    var photo = document.getElementById('photo').files[0];
    var onvan = document.getElementById('onvan').value;
    var matnKootah = document.getElementById('matnKootah').value;
    var matnKamel = document.getElementById('matnKamel').value;
    var date = document.getElementById('date').value;
    var namNevisande = document.getElementById('namNevisande').value;

    photo = URL.createObjectURL(photo);

    var myArray = localStorage.getItem('myArray');
    if (myArray) {
        myArray = JSON.parse(myArray);
    } else {
        myArray = [];
    }

    const article = {
        img: photo,
        title: onvan,
        text: matnKootah,
        text1: matnKamel,
        date: date,
        writer1: namNevisande
    };

    myArray.push(article);
    localStorage.setItem('myArray', JSON.stringify(myArray));



    let x = myArray.map((value, index) => {
        return `<div class="col mt-4  list-group-item">
        <div class="card" style="width:410px">
        <img class="card-img-top" src=${value.img} alt="Card image">
        <div class="card-body">
        <h4 class="card-title">${value.title}</h4>
        <p class="card-text text1">${value.text}</p>
        <a href="#" class="btn btn-primary" onclick="modalmap1(${value.id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>
        <p class="tarikh">${value.date}</p>
        </div>
        </div>
        </div>`
    })

    document.querySelector('.main').innerHTML = x.join("");

    document.querySelector("#afzoodan-magha").querySelector(".btn-close").click() // ... بستن مدال مقاله ...

    preparePagination(true);
    alert('مقاله با موفقیت ذخیره شد');

});
