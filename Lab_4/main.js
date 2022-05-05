function bai1() {
  while (true) {
    var x = Number(prompt("Nhap vao so phan tu cua mang: "));
    if (Number.isNaN(x) || x <= 0) {
      alert("Nhap sai, nhap lai");
    } else {
      break;
    }
  }
  var mang = [];
  for (let i = 0; i < x; i++) {
    mang[i] = Math.floor(Math.random() * 1000);
  }
  document.write("<br>In mang: ");
  for (let i = 0; i < x; i++) {
    document.write(mang[i] + " ");
  }
  for (let i = 0; i < x - 1; i++) {
    for (let j = i + 1; j < x; j++) {
      if (mang[i] > mang[j]) {
        let temp = mang[i];
        mang[i] = mang[j];
        mang[j] = temp;
      }
    }
  }
  document.write("<br>In mang da sap xep: ");
  for (let i = 0; i < x; i++) {
    document.write(mang[i] + " ");
  }
}

function bai3() {
  function sanPham(ten, gia, giamGia) {
    this.ten = ten;
    this.gia = gia;
    this.giamGia = giamGia;

    this.tinhThue = function () {
      document.write("<br>Thue nhap khau: " + (this.gia*10/100));
    }

    this.xuat = function() {
      document.write("</br>Ten san pham: " + this.ten);
      document.write("<br>Don gia: " + this.gia);
      document.write("<br>Giam gia: " + this.giamGia);
    }
  }

  var user = new sanPham("Laptop",10000,500);
  user.xuat();
  user.tinhThue();
}