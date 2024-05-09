// getting year dinamicly
let footer = document.getElementsByTagName("span")[4];
console.log(footer);
let nowYear = new Date().getFullYear();

footer.innerText = `© ${nowYear}`;
//youtube
let iconY = document.getElementsByTagName("i")[7];
iconY.style.cursor = "pointer";
//facebook
let iconF = document.getElementsByTagName("i")[8];
iconF.style.cursor = "pointer";
//X
let iconT = document.getElementsByTagName("i")[9];
iconT.style.cursor = "pointer";

iconY.onclick = () => {
  window.open("https://www.youtube.com/");
};
iconF.onclick = () => {
  window.open("https://www.facebook.com//");
};
iconT.onclick = () => {
  window.open("https://twitter.com/");
};
