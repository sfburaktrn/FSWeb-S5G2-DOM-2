import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

let imgs = document.querySelectorAll("img");

imgs.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.target.setAttribute("style", "filter:grayscale(100%)");
  });
});

imgs.forEach((e) => {
  e.addEventListener("dblclick", (event) => {
    event.target.style.filter = "none";
  });
});

// mouseover

let h2ler = document.querySelectorAll("h2");

h2ler.forEach((e) => {
  e.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
  });
});

h2ler.forEach((e) => {
  e.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
  });
});

// keydown

let x = document.querySelector("body");

x.addEventListener("keydown", (event) => {
  event.target.style.backgroundColor = "purple";
});

// wheel

let b = document.querySelectorAll(".nav-link");

b.forEach((e) => {
  e.addEventListener("wheel", (event) => {
    event.target.style.color = "red";
  });
});
