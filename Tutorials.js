let input = document.querySelector("input");
let btn = document.querySelector("button");
let div = document.querySelector(".QR");
let img = document.getElementById("QRimg");
btn.onclick = function () {
  if (input.value !== "") {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  }
};
