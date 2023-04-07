const menubtn=document.getElementById('open-btn');
const btnclose=document.getElementById('close-btn');
const nav=document.getElementById('links');
menubtn.addEventListener('click',()=>{
nav.classList.toggle('link')
    nav.classList.toggle('show-nav')
})
btnclose.addEventListener('click',()=>{
    nav.classList.toggle('link')
        nav.classList.toggle('show-nav')
    })