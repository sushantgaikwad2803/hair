// Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    header.classList.toggle("cover", window.scrollY > 200);
})

//navbar

 const dropbar = document.querySelector(".dropdown-menu")

document.addEventListener('DOMContentLoaded', () => {
    const togglebtnicon = document.querySelector('.menu-bar i');
    togglebtnicon.onclick = () => {
      dropbar.classList.toggle('active');

      const isopen = dropbar.classList.contains('active');
      togglebtnicon.classList = isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    };
});


// Slider 

const carousel = document.querySelector(".img-list");
const arrowbtn = document.querySelectorAll(".slider-img i");

const firstcar = carousel.querySelector(".png-item").offsetWidth; 



arrowbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstcar : firstcar;
    });
});

// product slider 

const carousel1 = document.querySelector(".img-slider");
const arrowbtn1 = document.querySelectorAll(".pro-slide i");

const firstcar1 = carousel.querySelector(".imges").offsetWidth; 



arrowbtn1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left" ? -firstcar1 : firstcar1;
    });
});