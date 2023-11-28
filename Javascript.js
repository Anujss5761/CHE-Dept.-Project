// Navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})




// Preloader
var loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
   loader.style.display = "none";
})