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
