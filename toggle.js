let body = document.querySelector('body');
let circle = document.querySelector('.circle');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

circle.addEventListener('click', () => {
    body.classList.toggle('green');
    circle.classList.toggle('right');
    on.classList.toggle('active');
    off.classList.toggle('active');
});
