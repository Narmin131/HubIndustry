// #####################################
// Adding local storage 
// #####################################
let theme = localStorage.getItem('data-theme');
const Btn = document.querySelector('.btn1');
const logo = document.querySelectorAll('.img');

const changeThemeToBlue = () =>{
    document.documentElement.setAttribute("data-theme", "blue");
    localStorage.setItem("data-theme", "blue");
    for(var x= 0;x<logo.length;x++){
        if(logo[x].src.match('assets/img/green.png')){
            logo[x].src = 'assets/img/blue.png' ;
        }
        else{
            logo[x].src = 'assets/img/green.png' ;
        }
    }
}


const changeThemeToGreen = () =>{
    document.documentElement.setAttribute("data-theme", "green");
    localStorage.setItem("data-theme", 'green');
    for(var x= 0;x<logo.length;x++){
        if(logo[x].src.match('assets/img/green.png')){
            logo[x].src = 'assets/img/blue.png' ;
        }
        else{
            logo[x].src = 'assets/img/green.png' ;
        }
    }
}

if(theme === 'blue'){
    changeThemeToBlue()
}

Btn.addEventListener('click', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='blue'){
        changeThemeToGreen()
    }else{
        changeThemeToBlue()
    }
   
});

// #####################################
// Slider
// #####################################
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 700,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3000,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

// #####################################
// Loading page
// #####################################

const loader = document.querySelector(".load");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    loader.style.transition = ".4s";
    setTimeout(function(){
      loader.style.display = "none";
    }, 2000);
  },2200);
}