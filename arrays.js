
document.body.appendChild(document.createElement("p"));
console.log(document);
let xx = document.getElementById("app");
xx.innerHTML = "hjgkjgkjgkjgkjgkjgk";

let ele = document.getElementsByClassName("para");
console.log(ele);
const bb = Array.from(ele);
console.log(bb);
bb.forEach((x) => (x.style.color = "red"));

const qq = document.querySelectorAll(".para");
console.log(qq);

qq.forEach((gg) => (gg.style.color = "yellow"));