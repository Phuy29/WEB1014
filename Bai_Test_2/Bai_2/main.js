var form = document.getElementById('form')
var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var course = document.getElementById('course')
var fee = document.getElementById('fee')
var type = document.getElementById('type')
var hocphithem = document.getElementById('hocphithem')

var typeElement = document.querySelectorAll('#type')

var courseValue = course.value
var feeValue = fee.value


form.onsubmit = function (e) {
  e.preventDefault()

  checkInput();
}

function checkInput() {
  var fullnameValue = fullname.value.trim()
  var emailValue = email.value.trim()
  var phoneValue = phone.value.trim()


  if (fullnameValue === '') {
    setError(fullname, 'Vui lòng nhập tên')
  } else {
    setSuccess(fullname)
  }

  if (emailValue === '') {
    setError(email, 'Vui lòng nhập email')
  } else if (!isEmail(emailValue)) {
    setError(email, "Email sai định dạng")
  } else {
    setSuccess(email)
  }

  if (phoneValue === '') {
    setError(phone, 'Vui lòng nhập sdt')
  } else if (!isPhone(phoneValue)) {
    setError(phone, 'Số điện thoại phai là số')
  } else {
    setSuccess(phone)
  }

  if (!typeElement[0].checked && !typeElement[1].checked) {
    setError(type, 'Vui lòng chọn phần trên')
  } else if (typeElement[0].checked) {
    hocphithem.value = '10';
  } else if (typeElement[1].checked) {
    hocphithem.value = 0;
  } else {
    setSuccess(type)
  }


}

function setSuccess(input) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message')

  formMessage.innerText = ''

  formGroup.className = 'form-group success'
}

function setError(input, message) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message')

  formMessage.innerText = message

  formGroup.className = 'form-group error'
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isPhone(phone) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
}

course.onchange = function () {
  switch (course.value) {
    case 'html':
      fee.value = '500'
      break;
    case 'js':
      fee.value = '800'
      break
    case 'php':
      fee.value = '1000'
      break;
  }
}



