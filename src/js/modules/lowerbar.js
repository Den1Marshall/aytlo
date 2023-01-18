export default () => {
    const lowerbar = document.querySelector('.lowerbar')
    const lowerbarLink = document.querySelector('.lowerbar__link');
    const lowerbarClose = document.querySelector('.lowerbar__close');

    lowerbarLink.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_04s')
        setTimeout(() => {
            lowerbar.style.display = 'none'
        }, 500);
    })

    lowerbarClose.addEventListener('click', () => {
        lowerbar.classList.add('fadeOut_05s')
        setTimeout(() => {
            lowerbar.style.display = 'none'
        }, 500);
    })
}