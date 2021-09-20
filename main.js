const menuBtn = document.querySelector('.hamburguerMenu');
const menMobile= document.querySelector('.menuMobile');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menMobile.classList.add('mobileopen');
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menMobile.classList.remove('mobileopen');
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});