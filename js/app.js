
// فانکشن جستوجو... فاکشن جستوجو ...فانکشن جستوجو...
function search() {

  var input = document.querySelector("#searchInput").value;
  var results = document.querySelector("#searchResults");
  var found = false;
  let y = [];
  for (var i = 0; i < myArray.length; i++) {
    var title = myArray[i].title;
    if (title.includes(input)) {
      y.push(`<div class="col mt-4">
      <div class="card " style="width:410px">
      <img class="card-img-top" src="${myArray[i].img}" alt="Card image">
      <div class="card-body">
      <h4 class="card-title">${myArray[i].title}</h4>
      <p class="card-text">${myArray[i].text}</p>
      <a href="#" class="btn btn-primary" onclick="modalmap1(${myArray[i].id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>
      <p class="tarikh">${myArray[i].date}</p>
      </div>
      </div>
      </div>`)
      found = true;
    };
  }
  document.querySelector('.main').innerHTML = y.join("");

  if (!found) {
    results.innerHTML = "چیزی یافت نشد."; 
  }
};

// pagination
function preparePagination(showLatest = false) {
  console.log('hiiii')
  // کد مربوط به صفحه‌بندی و نمایش مقالات
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
document.getElementById('selectElement').addEventListener('change',()=>{
  preparePagination();})

var myArray = [
  {
    id: 1,
    img: "./images/1.jpg",
    title: "عنوان مقاله 1",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 4/7/2019 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 2,
    img: "./images/5.jpg",
    title: "عنوان مقاله 2",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 5/7/2020 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 3,
    img: "./images/3.jpg",
    title: "عنوان مقاله 3",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 6/7/2018 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 4,
    img: "./images/6.jpg",
    title: "عنوان مقاله 4",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 7/7/2023 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 5,
    img: "./images/2.jpg",
    title: "عنوان مقاله 5",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 8/7/2022 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 6,
    img: "./images/4.jpg",
    title: "عنوان مقاله 6",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 9/7/2021 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },
  {
    id: 7,
    img: "./images/6.jpg",
    title: "عنوان مقاله 7",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و...",
    date: " 9/7/2017 ",
    text1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ",
    writer1: "نام نویسنده : لورم ایپسون!",
    isLiked: false,

  },

];

var myArrayString = JSON.stringify(myArray);
localStorage.setItem('myArray', myArrayString);

var storedArrayString = localStorage.getItem('myArray');
var storedArray = JSON.parse(storedArrayString);

let x = storedArray.map((value, index) => {
  return `<div class="col mt-4  list-group-item">
  <div class="card" style="width:410px">
  <img class="card-img-top" src=${value.img} alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${value.title}</h4>
      <p class="card-text text1">${value.text1}</p>
      <a href="#" class="btn btn-primary" onclick="modalmap1(${value.id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>
      <p class="tarikh">تاریخ انتشار: ${value.date}</p>
    </div>
  </div>
</div>`
})
document.querySelector('.main').innerHTML = x.join("");



// مدال map .... modal map ....مدال map 
function modalmap1(id) {

  let value = storedArray.find(it => it.id == id)
  var x2 = `<div class="modal-content">
    <div class="modal-header">
    <img class="card-img-top" src="${value.img}" alt="Card image" style="width: 100%;">
    </div>
    <div class="modal-title">
     <h1>${value.title}</h1>
    </div>
    <div class="modal-body">${value.text1}</div>
     <p class="tarikh">${value.writer1}</p>
     <p class="tarikh">تاریخ انتشار:${value.date}</p>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary close"  data-bs-dismiss="modal" id="btnModal">Close</button>
    <div id="btnLike-delete">
    <button type="button" class="btn btn-secondary like"  onclick="handleLike(${id})"   style="display: ${localStorage.getItem('isLoggedIn') === 'true' ? 'block' : 'none'}"><i class="fas fa-heart"></i></button>
    <button type="button" class="btn btn-secondary delete"  onclick="handleDelete(${id})"  data-bs-dismiss="modal"  style="display: ${localStorage.getItem('isLoggedIn') === 'true' ? 'block' : 'none'}">delete</button>
    </div>
    </div>
    </div>`
    
  document.querySelector('#modal-maghale').innerHTML = x2;
}


function handleLike(id) {
  var storedArrayString = localStorage.getItem('myArray');
  var storedArray = JSON.parse(storedArrayString);
  // console.log(storedArray)
  let finalArr = storedArray.map(item => item.id == id ? { ...item, isLiked: true } : item);
  localStorage.setItem('myArray', JSON.stringify(finalArr));
  
}


// .... حذف مقاله ....
function handleDelete(id) {
  var storedArrayString = localStorage.getItem('myArray');
  var storedArray = JSON.parse(storedArrayString);
  let finalArr = storedArray.filter(item => item.id !== id);
  let y = [];
  finalArr.map(myArray => {
    y.push(`<div class="col mt-4 list-group-item">
      <div class="card " style="width:410px">
      <img class="card-img-top" src="${myArray.img}" alt="Card image">
      <div class="card-body">
      <h4 class="card-title">${myArray.title}</h4>
      <p class="card-text text1">${myArray.text1}</p>
      <a href="#" class="btn btn-primary" onclick="modalmap1(${myArray.id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>
      <p class="tarikh">${myArray.date}</p>
      </div>
      </div>
      </div>`)
  })
  localStorage.setItem('myArray', JSON.stringify(finalArr));
  document.querySelector('.main').innerHTML = y.join("");
  preparePagination();
}

function tazetarinha() {

  // myArray
  var selectElement = document.getElementById("selectElement");
  var selectedValue = selectElement.value;
  var storedArrayString = localStorage.getItem('myArray');
  var storedArray = JSON.parse(storedArrayString);
  for (let i = 0; i < storedArray.length; i++) {
    const timeStamp = new Date(storedArray[i].date)
    storedArray[i].stamptTime = timeStamp.getTime();
  }
  for (let i = 0; i < storedArray.length; i++) {
    const timeStamp = new Date(storedArray[i].date);
    storedArray[i].stamptTime = timeStamp.getTime();
  }
  let finalArr = []
  switch (selectedValue) {
    case "0":
      finalArr = storedArray;
      break;
    case "1":
      finalArr = storedArray.slice().sort(function (a, b) { return b.stamptTime - a.stamptTime })
      break;
    case "2":
      finalArr = storedArray.slice().filter(item => item.isLiked === true);
      break;
    case "3":
      finalArr = storedArray.slice().sort(function (a, b) { return a.stamptTime - b.stamptTime })
      break;
  }
  let y = [];
  finalArr.map(myArray => {
    y.push(`<div class="col mt-4 list-group-item">
      <div class="card " style="width:410px">
      <img class="card-img-top" src="${myArray.img}" alt="Card image">
      <div class="card-body">
      <h4 class="card-title">${myArray.title}</h4>
      <p class="card-text text1">${myArray.text1}</p>
      <a href="#" class="btn btn-primary" onclick="modalmap1(${myArray.id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>

      <p class="tarikh">${myArray.date}</p>
      </div>
      </div>
      </div>`)
  })
  

  document.querySelector('.main').innerHTML = y.join("");

  preparePagination();
}

