// onscroll change background ===============

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_section");
    if (header) {
        if (window.scrollY > 10) { // adjust scroll value
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});



// navbar_Active ====================

document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", function () {
        // remove active class from all
        document.querySelectorAll(".navbar ul li a").forEach(el => el.classList.remove("active"));

        // add active to clicked one
        this.classList.add("active");
    });
});


const toggle = document.getElementById('lang_toggle');
const fr = document.getElementById('lang_fr');
const de = document.getElementById('lang_de');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    fr.style.opacity = "0.5";
    de.style.opacity = "1";
  } else {
    fr.style.opacity = "1";
    de.style.opacity = "0.5";
  }
});
