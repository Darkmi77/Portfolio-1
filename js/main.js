(function (){
    const burger = document.querySelector('.burger');
    const wrap = document.querySelector('.container_wrap');
    burger.addEventListener('click', function(){
        burger.classList.toggle('burger_active');
        if(wrap.classList.contains('white')){
            wrap.classList.remove('white');
        }else{
            wrap.classList.add('white');
        }    
    });
    const lang = document.querySelector('.dropbtn');
    lang.addEventListener('click', function(){
        lang.parentElement.classList.toggle('lang_active');
    });
}());
 

let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function () {
    
    offset = offset + 257;
    if (offset > 1028){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; 
});

