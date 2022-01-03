let gnbOpen = 'false';

const menuBtn = document.querySelector('.js-menu-btn');
const gnb = document.querySelector('.gnb');
const header = document.querySelector('.header');
const body = document.querySelector('body');

menuBtn.addEventListener('click',function(){
    if(menuBtn.classList.contains('is-active')){
        gnb.classList.remove('is-active');
        header.classList.remove('is-active');
        menuBtn.classList.remove('is-active');
        body.classList.remove('is-active');
    }else{
        gnb.classList.add('is-active');
        header.classList.add('is-active');
        menuBtn.classList.add('is-active');
        body.classList.add('is-active');
    }
})