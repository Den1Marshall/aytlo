import fadeOut from "./fadeOut";

export default function() {
    const lowerbar = document.querySelector('.lowerbar');
    const lowerbarCloseBtn = document.querySelector('.lowerbar__close');
    const lowerbarLink = document.querySelector('.lowerbar__link');

    fadeOut(lowerbarCloseBtn, lowerbar, 400)
    fadeOut(lowerbarLink, lowerbar, 400)
}