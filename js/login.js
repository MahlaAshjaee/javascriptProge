const open1 = document.querySelector('#open1');
const open = document.querySelector('#open');
const modalCantainer = document.querySelector('.modal-container');
const modalproph = document.querySelector('.modal-proph');
const afzoodanMaghale = document.querySelector('#afzoodan-maghale');
var delet = document.getElementsByClassName('delete').value;
var like = document.getElementsByClassName('like').value;

// const close = document.querySelector('#close');

const log = document.querySelector('#login');
const reg = document.querySelector('#register');
const btn = document.querySelector('#btn');

function login() {
  reg.style.right = '450px';
  log.style.right = '0px';
  btn.style.right = '0px';
}

function register() {
  reg.style.right = '0px';
  log.style.right = '-450px';
  btn.style.right = '110px';
}

const butprof = document.querySelector('#but-prof');


//... مدال ورود ... مدال ورود ... مدال ورود ...
document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault();
  var username = document.getElementById('num').value;
  const password = document.getElementById('pass').value;
  const phonnumber = /^\d{11}$/;

  //   ... شماره تلفن رو در local strage قرار میدیم ... 
  localStorage.setItem('userInfo', JSON.stringify({ userNumber: username }));
  //  localStorage.getItem(userInfo);

  if (phonnumber.test(username) && password === '11111') {
    // ذخیره وضعیت ورود
    localStorage.setItem('isLoggedIn', true);
    $('#loginModal').modal('hide');
    open.style.display = 'none';
    open1.style.display = 'block';
    khoroj.style.display = 'block';
    afzoodanMaghale.style.display = 'block';
    document.getElementById('num').value = '';
    document.getElementById('pass').value = '';
    alert('خوش آمدید!');

  } else {
    alert('نام کاربری یا رمز عبور اشتباه است!');
  }
});

// ... دکمه خروج .... دکمه خروج ...دکمه خروج ...
const khoroj = document.getElementById('khoroj');
khoroj.addEventListener('click', function () {
  localStorage.clear();
  open1.style.display = 'none';
  open.style.display = 'block';
  khoroj.style.display = 'none';
  afzoodanMaghale.style.display = 'none';
});

// ...وقتی کاربر لاگینه و صفحه رو رفرش میکنه لاگین بمونه ...
window.addEventListener('load', function () {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    //خط بالا میگ اگ کاریر لاگین بود
    $('#loginModal').modal('hide');
    open.style.display = 'none';
    open1.style.display = 'block';
    khoroj.style.display = 'block';
    afzoodanMaghale.style.display = 'block';
  }
});


// بررسی وجود اطلاعات کاربر در Local Storage
const userInfo = localStorage.getItem('userInfo');

if (userInfo) {

  const { userNumber, fullName, birthDate, nationalCode } = JSON.parse(userInfo);
  // پر کردن فرم با اطلاعات قبلی کاربر
  document.getElementById('userNumber').value = userNumber;
  document.getElementById('fullName').value = fullName ?? '';
  document.getElementById('birthDate').value = birthDate ?? '';
  document.getElementById('nationalCode').value = nationalCode ?? '';
}

document.getElementById('userInfoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userNumber = document.getElementById('userNumber').value;
  const fullName = document.getElementById('fullName').value;
  const birthDate = document.getElementById('birthDate').value;
  const nationalCode = document.getElementById('nationalCode').value;


  const userInfo = {
    userNumber,
    fullName,
    birthDate,
    nationalCode
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  alert('اطلاعات با موفقیت ذخیره شد و خوش امدید!');
  $('#profile-modal').modal('hide');
})

// ...مدال ثبت نام... مدال ثبت نام...مدال ثبت نام...
document.getElementById('register').addEventListener('submit', function (e) {
  e.preventDefault();
  const username1 = document.getElementById('num1').value;
  const pass1 = document.getElementById('pass1').value;
  const pass11 = document.getElementById('pass11').value;

  if (pass1 !== pass11) {
    alert('باید پسورد و تکرار ان یکسان باشد');
  }
  localStorage.setItem('userInfo', JSON.stringify({ userNumber: username1 }));
  localStorage.setItem('pass1', pass1);
  localStorage.setItem('pass11', pass11);

  alert('ثبت نام  با موفقیت انجام شد');
  $('#loginModal').modal('hide');

  document.getElementById('num1').value = '';
  document.getElementById('pass1').value = '';
  document.getElementById('pass11').value = '';
});



