var form = document.getElementById('form')
var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var user = document.getElementById('user')
var pass = document.getElementById('pass')
var repass = document.getElementById('repass')
var intro = document.getElementsByName('intro')
var introElment = document.getElementById('intro')

var datafullname = document.querySelector('.data-fullname')
var dataEmail = document.querySelector('.data-email')
var dataPhone = document.querySelector('.data-phone')
var dataUser = document.querySelector('.data-user')
var dataPass = document.querySelector('.data-pass')
var dataRepass = document.querySelector('.data-repass')
var dataIntro = document.querySelector('.data-intro')
var introChecked = document.querySelector('input[type="radio"]:checked')

form.onsubmit = function (e) {
  e.preventDefault();

  checkInput();
}

function checkInput() {
  var fullnameValue = fullname.value.trim();
  var emailValue = email.value.trim();
  var phoneValue = phone.value.trim();
  var userValue = user.value.trim();
  var passValue = pass.value.trim();
  var repassValue = repass.value.trim();


  if (fullnameValue === '') {
    setError(fullname, 'Vui lòng nhập đầy đủ họ tên')
  } else {
    setSuccess(fullname)
    datafullname.innerText = `Họ tên: ${fullnameValue}`
  }

  if (emailValue === '') {
    setError(email, 'Vui lòng nhập email')
  } else if (!isEmail(emailValue)) {
    setError(email, 'Vui lòng nhập đúng định dạng email')
  } else {
    setSuccess(email)
    dataEmail.innerText = `Email: ${emailValue}`
  }

  if (phoneValue === '') {
    setError(phone, 'Vui lòng nhập số điện thoại')
  } else {
    setSuccess(phone);
    dataPhone.innerText = `Số điện thoại: ${phoneValue}`
  }

  if (userValue === '') {
    setError(user, 'Vui lòng nhập user')
  } else if (userValue.lengt <= 8) {
    setError(user, 'Vui lòng nhập tối thiểu 8 kí tự')
  } else {
    setSuccess(user)
    dataUser.innerText = `User: ${userValue}`
  }

  if (passValue === '') {
    setError(pass, 'Vui lòng nhập mật khẩu')
  } else {
    setSuccess(pass)
    dataPass.innerText = `Pass: ${passValue}`
  }

  if (repassValue === '') {
    setError(repass, 'Vui lòng nhập lại mật khẩu')
  } else if (repassValue !== passValue) {
    setError(repass, 'Mật khẩu nhập lại sai')
  } else {
    setSuccess(repass)
    dataRepass.innerText = `Repass: ${repassValue}`
  }

  if (!intro[0].checked && !intro[1].checked) {
    setError(introElment, 'Vui lòng chọn phần trên')
  } else {
    setSuccess(introElment)
    if (introChecked) {
      var introCheckedValue = introChecked.value;
      dataIntro.innerText = `Bạn biết chúng tôi qua: ${introCheckedValue}`
    }
  }
}

function setError(input, message) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message');

  formMessage.innerText = message;

  formGroup.className = 'form-group error'
}

function setSuccess(input) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message');

  formMessage.innerText = '';

  formGroup.className = 'form-group success'
}
  
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}