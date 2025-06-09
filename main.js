const headerNavigationBurger = document.querySelector('[data-js-headerNavigationBurger]');
const headerNavigationBurgerMenu = document.querySelector('[data-js-active]');
const  headerNavigationBurgerMenuClose = document.querySelector('[data-js-headerNavigationBurgerClose]');
headerNavigationBurger.addEventListener("click",()=>{
    headerNavigationBurgerMenu.classList.toggle('close');
})
headerNavigationBurgerMenuClose.addEventListener("click",()=>{
    headerNavigationBurgerMenu.classList.toggle('close');
})