// Mobile Navigation Menu

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
function openLightbox(image){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = image;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}