var form = document.getElementById('form');
var customer = document.getElementById('customer');
var sector = document.getElementById('sector');
var price = document.getElementById('price');
var count = document.getElementById('count');
var money = document.getElementById('money');
var place = document.getElementById('place');
var fee = document.getElementById('fee');
var placeRadio = document.querySelectorAll('#place');

form.onsubmit = function(e) {
  e.preventDefault();

  checkInput();
}

function checkInput() {
  if (customer.value === '') {
    setError(customer, 'Vui lòng nhập khách hàng')
  } else {
    setSuccess(customer)
  }

  if (price.value === '') {
    setError(price,'Vui lòng nhập đơn giá')
  } else {
    setSuccess(price)
  }

  if (count.value === '') {
    setError(count,'Vui lòng nhập số lượng')
  } else {
    setSuccess(count)
  }

  if (money) {
    money.value = price.value * count.value;
  }

  if (!placeRadio[0].checked && !placeRadio[1].checked) {
    setError(place,'Vui lòng chọn nơi nhận hàng')
  }

  if (placeRadio[0].checked) {
    fee.value = 0;
  } else if (placeRadio[1].checked) {
    fee.value = '1000';
  }
}

function setError(input, message) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message')

  formMessage.innerHTML = message;

}

function setSuccess(input) {
  var formGroup = input.parentElement;
  var formMessage = formGroup.querySelector('.form-message')

  formMessage.innerHTML = '';

}
