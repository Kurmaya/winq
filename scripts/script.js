const close = document.querySelector('.close');
close.addEventListener('click',()=>{
close.classList.toggle('active');
document.querySelector('.navlinks').classList.toggle('active');
})