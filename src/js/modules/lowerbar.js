export default () => {
    const lowerbar = document.querySelector('.lowerbar')
    const lowerbarLink = document.querySelector('.lowerbar__link');
    const lowerbarClose = document.querySelector('.lowerbar__close');

    lowerbarLink.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_03s')
    })

    lowerbarClose.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_03s')
    })

    lowerbar.addEventListener('animationend', () => {
        lowerbar.style.display = 'none'
        lowerbar.classList.remove('fadeOut_03s')
    })
}