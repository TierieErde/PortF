const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.menu'),
    closeEl = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');
burger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeEl .addEventListener('click', () => {
    menu.classList.remove('active');
});
overlay .addEventListener('click', () => {
    menu.classList.remove('active');
});