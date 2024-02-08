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


// Labs
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Confetti

const confettiBtn = document.querySelector(".confetti-button");

confettiBtn.addEventListener("Click",   ()=>{
    const canvas = document.createElement("canvas");
    const container = document.querySelector(".wrapper");

    // set dimension for canvas
    canvas.width = 600;
    canvas.height = 600;

    container.appendChild(canvas);

    // create confetti inside the canvas
    const confetti_btn = confetti.create(canvas);
    
    // remove the canvas after spreading confetti
    confetti_btn.then(() => canvas.remove());
});