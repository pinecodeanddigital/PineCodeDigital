const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
