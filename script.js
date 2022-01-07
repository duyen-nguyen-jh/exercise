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
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("animatedHeader").classList.add("headerBlack");
    document.getElementById("transLogoHorizontal").classList.remove("transLogoRotate");

    document.getElementById("mobileHeader").classList.add("headerBlackMobile");
    document.getElementById("mobileLogo").classList.remove("mobileLogoRotate");
  } else {
    document.getElementById("animatedHeader").classList.remove("headerBlack");
    document.getElementById("transLogoHorizontal").classList.add("transLogoRotate");
    
    document.getElementById("mobileHeader").classList.remove("headerBlackMobile");
    document.getElementById("mobileLogo").classList.add("mobileLogoRotate");
  }
};
