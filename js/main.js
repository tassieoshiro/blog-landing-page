/* When click on link toggle between adding and remove the sub-menu */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
//  adding and removing class from icon
  var element = document.getElementById("myIcon");
  element.classList.toggle("fa-rotate-180");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Hamburger MENU
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
// Targeting the nav
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove("open");

    showMenu = false;
  }
}

