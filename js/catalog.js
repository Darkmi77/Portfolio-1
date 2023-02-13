(function(){
    const burger = document.querySelector('.burger');
    const wrap = document.querySelector('.container_wrap');
    burger.addEventListener ('click', function(){
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



document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown_button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown_list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown_list_item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown_input-hidden');

    dropDownBtn.addEventListener('click', function(){
        dropDownList.classList.toggle('dropdown_list--visible');
        this.classList.add('dropdown_button--active');
    });

    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown_list--visible');
        });
    });
    document.addEventListener('click', function(e) {
        if(e.target !== dropDownBtn){
            dropDownBtn.classList.remove('dropdown_button--active');
            dropDownList.classList.remove('dropdown_list--visible');
        }
    });

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Tab' || e.key === 'Escape'){
            dropDownBtn.classList.remove('dropdown_button--active');
            dropDownList.classList.remove('dropdown_list--visible');
        }
    });
});

