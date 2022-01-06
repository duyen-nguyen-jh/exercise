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
