import fadeOut from "./fadeOut";
import fadeToggle from "./fadeToggle";

export default () => {
    const headerMobile = document.querySelector('.header-mobile');
    const menuBtn = document.querySelector('.header-mobile__menu-btn');
    const headerMobileMenu = document.querySelector('.header-mobile__menu');
    const headerMobileMenuLinks = document.querySelectorAll('.header-mobile__menu-link')

    fadeToggle(menuBtn, headerMobileMenu, 400, 'flex', () => {
        menuBtn.classList.toggle('header-mobile__menu-btn--active')
        headerMobile.classList.toggle('header-mobile--no-bg')
    })

    headerMobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            fadeOut(null, headerMobileMenu)

            menuBtn.classList.toggle('header-mobile__menu-btn--active')
            headerMobile.classList.toggle('header-mobile--no-bg')
        })
    })
}