let gnbOpen = 'false';

const menuBtn = document.querySelector('.js-menu-btn');
const gnb = document.querySelector('.gnb');
const header = document.querySelector('.header');

menuBtn.addEventListener('click',function(){
    gnb.classList.add('is-active');
    header.classList.add('is-active');
    menuBtn.classList.add('is-active');
})