export default () => {
    const lowerbar = document.querySelector('.lowerbar')
    const lowerbarLink = document.querySelector('.lowerbar__link');
    const lowerbarClose = document.querySelector('.lowerbar__close');

    lowerbarLink.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_04s')
    })

    lowerbarClose.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_04s')
    })

    lowerbar.addEventListener('animationend', () => {
        lowerbar.style.display = 'none'
        lowerbar.classList.remove('fadeOut_04s')
    })
}