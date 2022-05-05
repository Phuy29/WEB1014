var arrImg = []
arrImg[0] = "img/pc1.jpg"
arrImg[1] = "img/pc2.jpg"
arrImg[2] = "img/pc3.jpg"
arrImg[3] = "img/pc4.jpg"
arrImg[4] = "img/pc5.jpg"


var i = 0

function next() {
  if (i === arrImg.length - 1 ) {
    i = 0;
  } else {
    i++;
  }
  document.querySelector(".img").src = arrImg[i];
}

function prev() {
  if (i === 0) {
    i = arrImg.length - 1;
  } else {
    i--;
  }
  document.querySelector(".img").src = arrImg[i];
}

setInterval(function() {
  next();
}, 2000);