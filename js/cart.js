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

document.querySelectorAll('.button-wrapper').forEach(function (dropDownWraper) {
    const sizeBtn = document.querySelectorAll('.drop_size');
    sizeBtn.addEventListener('click', function(){
        sizeBtn.classList.toggle('size_active');
    });
});

window.addEventListener('click', function (event) {
    let counter;
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    
    if(event.target.dataset.action === 'minus'){
        if(parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
        }     
    }
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }
});



const cardWrap = document.querySelector('.card_wrap');
const cart = document.querySelector('.card');
const btnRemove = document.querySelectorAll('.remove');




