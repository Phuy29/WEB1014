var arrImg = []
arrImg[0] = "img/banner.jpg"
arrImg[1] = "img/slider1.png"
arrImg[2] = "img/slider2.jpg"

var i = 0
var imgAuto;
var index;
function next() {
  i++;
  document.querySelector(".slider-img").src = arrImg[i];
  index = i;
  if (i == arrImg.length - 1) {
    i = -1
  }
}

function pre() {
  index--;
  document.querySelector(".slider-img").src = arrImg[index];
  if (index == 0) {
    index = 3;
  }
}

function auto() {
  i++;
  document.querySelector(".slider-img").src = arrImg[i];
  if (i == arrImg.length - 1) {
    i = -1
  }
  imgAuto = setTimeout(auto,2000);
}

function stop() {
  clearTimeout(imgAuto);
}

function first() {
  document.querySelector(".slider-img").src = arrImg[0];
}

function last() {
  document.querySelector(".slider-img").src = arrImg[2];
}


