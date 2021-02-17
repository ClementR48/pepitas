let btn = document.querySelector('.toggle_btn');
let nav = document.querySelector('.menu');
let body = document.querySelector('.bodyMenu');

btn.addEventListener('click', handleNav);

function handleNav() {
    nav.classList.toggle('nav_open');
    
    body.classList.toggle('opacity');
    nav.classList.toggle('no_opacity');
}