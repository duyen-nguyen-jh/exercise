function onClickBurger() {
  let header = document.getElementById("toggleHeader");
  document.getElementById("burgerIcon").onclick = function () {
    if (header.style.display === "none") {
      header.style.display = "block";
    } else {
      header.style.display = "none";
    }
  };
}
// window.onscroll = function () {
//   if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
//     document.getElementById("transLogoHorizontal").style.display = "block";
//   } else {
//     console.log("hihi");
//     document.getElementById("transLogoHorizontal").style.display = "none";
//   }
// };
