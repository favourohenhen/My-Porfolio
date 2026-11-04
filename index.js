const navMenu = document.getElementById("nav-menu");
console.log(navMenu)

let menuOpen = false;

function toggleMenu() {
  if (menuOpen === false) {
    navMenu.style.left = "0";
    menuOpen = true;

  } else {
    navMenu.style.left = "-100%";
    menuOpen = false;
  }
}
function closeBtn() {
  navMenu.style.left = "-100%";
  menuOpen = false;
}