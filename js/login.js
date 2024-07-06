const open1 = document.querySelector("#open1");
const open = document.querySelector("#open");
const modalCantainer = document.querySelector(".modal-container");
const modalproph = document.querySelector(".modal-proph");
const afzoodanMaghale = document.querySelector("#afzoodan-maghale");
var delet = document.getElementsByClassName("delete").value;
var like = document.getElementsByClassName("like").value;

const log = document.querySelector("#login");
const reg = document.querySelector("#register");
const btn = document.querySelector("#btn");

function login() {
  reg.style.right = "450px";
  log.style.right = "0px";
  btn.style.right = "0px";
}

function register() {
  reg.style.right = "0px";
  log.style.right = "-450px";
  btn.style.right = "110px";
}

const butprof = document.querySelector("#but-prof");

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("num").value;
  const password = document.getElementById("pass").value;
  const phonnumber = /^\d{11}$/;

  localStorage.setItem("userInfo", JSON.stringify({ userNumber: username }));

  if (phonnumber.test(username) && password === "11111") {
    localStorage.setItem("isLoggedIn", true);
    $("#loginModal").modal("hide");
    open.style.display = "none";
    open1.style.display = "block";
    khoroj.style.display = "block";
    afzoodanMaghale.style.display = "block";
    document.getElementById("num").value = "";
    document.getElementById("pass").value = "";
    alert("خوش آمدید!");
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است!");
  }
});

const khoroj = document.getElementById("khoroj");
khoroj.addEventListener("click", function () {
  localStorage.clear();
  open1.style.display = "none";
  open.style.display = "block";
  khoroj.style.display = "none";
  afzoodanMaghale.style.display = "none";
});

window.addEventListener("load", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    $("#loginModal").modal("hide");
    open.style.display = "none";
    open1.style.display = "block";
    khoroj.style.display = "block";
    afzoodanMaghale.style.display = "block";
  }
});

const userInfo = localStorage.getItem("userInfo");

if (userInfo) {
  const { userNumber, fullName, birthDate, nationalCode } =
    JSON.parse(userInfo);
  document.getElementById("userNumber").value = userNumber;
  document.getElementById("fullName").value = fullName ?? "";
  document.getElementById("birthDate").value = birthDate ?? "";
  document.getElementById("nationalCode").value = nationalCode ?? "";
}

document
  .getElementById("userInfoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userNumber = document.getElementById("userNumber").value;
    const fullName = document.getElementById("fullName").value;
    const birthDate = document.getElementById("birthDate").value;
    const nationalCode = document.getElementById("nationalCode").value;

    const userInfo = {
      userNumber,
      fullName,
      birthDate,
      nationalCode,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    alert("اطلاعات با موفقیت ذخیره شد و خوش امدید!");
    $("#profile-modal").modal("hide");
  });

document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault();
  const username1 = document.getElementById("num1").value;
  const pass1 = document.getElementById("pass1").value;
  const pass11 = document.getElementById("pass11").value;

  if (pass1 !== pass11) {
    alert("باید پسورد و تکرار ان یکسان باشد");
  }
  localStorage.setItem("userInfo", JSON.stringify({ userNumber: username1 }));
  localStorage.setItem("pass1", pass1);
  localStorage.setItem("pass11", pass11);

  alert("ثبت نام  با موفقیت انجام شد");
  $("#loginModal").modal("hide");

  document.getElementById("num1").value = "";
  document.getElementById("pass1").value = "";
  document.getElementById("pass11").value = "";
});
