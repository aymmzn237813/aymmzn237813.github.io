var fr = document.getElementById("1");
var sc = document.getElementById("2");
var rd = document.getElementById("3");
var th = document.getElementById("4");
var dawerCont = document.getElementById("g");

fr.onclick = () => {
  fr.classList.add("active");
  sc.classList.remove("active");
  rd.classList.remove("active");
  th.classList.remove("active");
  dawerCont.style.left = "0";
};
sc.onclick = () => {
  sc.classList.add("active");
  fr.classList.remove("active");
  rd.classList.remove("active");
  th.classList.remove("active");
  dawerCont.style.left = "-100%";
};
rd.onclick = () => {
  rd.classList.add("active");
  sc.classList.remove("active");
  fr.classList.remove("active");
  th.classList.remove("active");
  dawerCont.style.left = "-200%";
  dawerCont.style.left = "-200%";
};
th.onclick = () => {
  th.classList.add("active");
  sc.classList.remove("active");
  rd.classList.remove("active");
  fr.classList.remove("active");
  dawerCont.style.left = "-300%";
};
var fr2 = document.getElementById("2.1");
var sc2 = document.getElementById("2.2");
var rd2 = document.getElementById("2.3");
var th2 = document.getElementById("2.4");
var dawerCont2 = document.getElementById("k");

fr2.onclick = () => {
  fr2.classList.add("active");
  sc2.classList.remove("active");
  rd2.classList.remove("active");
  th2.classList.remove("active");
  dawerCont2.style.left = "0";
};
sc2.onclick = () => {
  sc2.classList.add("active");
  fr2.classList.remove("active");
  rd2.classList.remove("active");
  th2.classList.remove("active");
  dawerCont2.style.left = "-100%";
};
rd2.onclick = () => {
  rd2.classList.add("active");
  sc2.classList.remove("active");
  fr2.classList.remove("active");
  th2.classList.remove("active");
  dawerCont2.style.left = "-200%";
};
th2.onclick = () => {
  th2.classList.add("active");
  sc2.classList.remove("active");
  rd2.classList.remove("active");
  fr2.classList.remove("active");
  dawerCont2.style.left = "-300%";
};
