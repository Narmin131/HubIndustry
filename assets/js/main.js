
// Fourth way
let theme = localStorage.getItem('data-theme');
const Btn = document.querySelector('.btn1');
const logo = document.querySelector('.img');

const changeThemeToBlue = () =>{
    document.documentElement.setAttribute("data-theme", "blue");
    localStorage.setItem("data-theme", "blue");
    if(logo.src.match('assets/img/green.png')){
        logo.src = 'assets/img/blue.png' ;
    }
    else{
        logo.src = 'assets/img/green.png' ;
    }
}

const changeThemeToGreen = () =>{
    document.documentElement.setAttribute("data-theme", "green");
    localStorage.setItem("data-theme", 'green');
    if(logo.src.match('assets/img/green.png')){
        logo.src = 'assets/img/blue.png' ;
    }
    else{
        logo.src = 'assets/img/green.png' ;
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


// const Btn2 = document.querySelector('.btn2');
// // const logo = document.querySelector('.img');
// const myFunc = () =>{
//     if(logo.src.match('assets/img/yasil.png')){
//         logo.src = 'assets/img/goy.png' ;
//     }
//     else{
//         logo.src = 'assets/img/yasil.png' ;
//     }
// }

// Btn2.addEventListener('click',myFunc);