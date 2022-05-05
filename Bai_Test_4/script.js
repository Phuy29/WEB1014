var form = document.getElementById('form')
var fullname = document.getElementById('fullname')
var phone = document.getElementById('phone')

form.onsubmit = function (e) {
  e.preventDefault();

  checkInput();

}



function checkInput() {
  if (fullname.value.trim() === '') {
    var formGroup = fullname.parentElement;
    var formMessage = formGroup.querySelector('.form-message');

    formMessage.innerText = 'Vui lòng nhập tên khách hàng'
  }

  if (phone.value.trim() === '') {
    var formGroup = phone.parentElement;
    var formMessage = formGroup.querySelector('.form-message');

    formMessage.innerText = 'Vui lòng nhập số điện thoại'
  }
}

var price1 = document.getElementById('price-1')
var price2 = document.getElementById('price-2')
var price3 = document.getElementById('price-3')
var quantity1 = document.getElementById('quantity-1')
var quantity2 = document.getElementById('quantity-2')
var quantity3 = document.getElementById('quantity-3')
var money1 = document.getElementById('money-1')
var money2 = document.getElementById('money-2')
var money3 = document.getElementById('money-3')
var sum = document.getElementById('sum')
var prices = [];
var total = 0;

function checkTable() {
  if (quantity1.value) {
    prices[0] = price1.value * quantity1.value;
    money1.innerText = prices[0]
  }

  if (quantity2.value) {
    prices.shift();
    prices[1] = price2.value * quantity2.value;
    money2.innerText = prices[1]
  }

  if (quantity3.value) {
    prices.splice(0,2);
    prices[2] = price3.value * quantity3.value;
    money3.innerText = prices[2]
  }

  console.log(prices);
}

function totalMoney() {
  prices.forEach(function (price) {
    total += price;
  })
  sum.innerText = total;
}

quantity1.oninput = function () {
  checkTable();
  totalMoney();

}
quantity2.oninput = function () {
  checkTable();
  totalMoney();


}
quantity3.oninput = function () {
  checkTable();
  totalMoney();


}