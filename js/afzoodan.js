document
  .getElementById("afzoodan-magha")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var photo = document.getElementById("photo").value;
    var onvan = document.getElementById("onvan").value;
    var matnKootah = document.getElementById("matnKootah").value;
    var matnKamel = document.getElementById("matnKamel").value;
    var date = document.getElementById("date").value;
    var namNevisande = document.getElementById("namNevisande").value;

    var myArray = localStorage.getItem("myArray");
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
      writer1: namNevisande,
    };

    myArray.push(article);
    localStorage.setItem("myArray", JSON.stringify(myArray));

    var myArrayString = JSON.stringify(myArray);
    localStorage.setItem("myArray", myArrayString);

    var storedArrayString = localStorage.getItem("myArray");
    var storedArray = JSON.parse(storedArrayString);

    let x = storedArray.map((value, index) => {
      return `<div class="col mt-4  list-group-item">
    <div class="card" style="width:410px">
    <img class="card-img-top" src=${value.img} alt="Card image">
    <div class="card-body">
    <h4 class="card-title">${value.title}</h4>
    <p class="card-text">${value.text}</p>
    <a href="#" class="btn btn-primary" onclick="modalmap1(${value.id})" data-bs-toggle="modal" data-bs-target="#modal-maghale">ادامه مطلب</a>
    <p class="tarikh">${value.date}</p>
    </div>
    </div>
    </div>`;
    });

    document.querySelector(".main").innerHTML = x;
    alert("مقاله با موفقیت ذخیره شد");
  });
