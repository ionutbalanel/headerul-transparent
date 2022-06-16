let navbar = document.getElementById("js-navbar");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 90) {
    navbar.classList.add("navbar-strick");
  } else {
    navbar.classList.remove("navbar-strick");
  }
});
