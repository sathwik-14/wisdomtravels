const menubtn=document.getElementById('open-btn');
const nav=document.getElementById('link');
menubtn.addEventListener("click",()=>{
    nav.classList.toggle('show-nav');
})