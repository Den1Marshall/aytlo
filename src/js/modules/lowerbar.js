import fadeOut from "./fadeOut";

export default function() {
    const lowerbar = document.querySelector('.lowerbar');
    const lowerbarCloseBtn = document.querySelector('.lowerbar__close');
    const lowerbarLink = document.querySelector('.lowerbar__link');

    if (sessionStorage.getItem('isLowerbarClicked') === 'true') lowerbar.style.display = 'none'

    lowerbarLink.onclick = () => fadeOut(null, lowerbar, 400); sessionStorage.setItem('isLowerbarClicked', 'true');

    lowerbarCloseBtn.onclick = () => fadeOut(null, lowerbar, 400); sessionStorage.setItem('isLowerbarClicked', 'true')
}