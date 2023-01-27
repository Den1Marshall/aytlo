export default () => {
    'use strict'
    const chooseBlockBtns = document.querySelectorAll('.choose__buttons-btn');
    const sliders = document.querySelectorAll('.choose__slider')
    const navs = document.querySelectorAll('.choose__slider-nav')
    const sliderSlides = document.querySelectorAll('.choose__slider-slide');
    const sliderNavItems = document.querySelectorAll('.choose__slider-nav-item');

    for (let i = 0; i < sliderSlides.length; i++) {
        sliderNavItems[i].style.backgroundImage = `url('${(sliderSlides[i].src).substr(27, 27)}')`
    }


    chooseBlockBtns.forEach(button => {
        button.addEventListener('click', e => {
            chooseBlockBtns.forEach(button => button.classList.remove('choose__buttons-btn--active'))

            if (e.target) {
                e.target.classList.add('choose__buttons-btn--active')
            }

            if (e.target.dataset.character === 'asura') {
                sliders.forEach(slider => slider.dataset.character === 'asura' ? slider.style.display = 'flex' : slider.style.display = 'none')
                navs.forEach(nav => nav.dataset.character === 'asura' ? nav.style.display = 'flex' : nav.style.display = 'none')
            }

            if (e.target.dataset.character === 'heat') {
                sliders.forEach(slider => slider.dataset.character === 'heat' ? slider.style.display = 'flex' : slider.style.display = 'none')
                navs.forEach(nav => nav.dataset.character === 'heat' ? nav.style.display = 'flex' : nav.style.display = 'none')
            }

            if (e.target.dataset.character === 'jumper') {
                sliders.forEach(slider => slider.dataset.character === 'jumper' ? slider.style.display = 'flex' : slider.style.display = 'none')
                navs.forEach(nav => nav.dataset.character === 'jumper' ? nav.style.display = 'flex' : nav.style.display = 'none')
            }

            if (e.target.dataset.character === 'beestyx') {
                sliders.forEach(slider => slider.dataset.character === 'beestyx' ? slider.style.display = 'flex' : slider.style.display = 'none')
                navs.forEach(nav => nav.dataset.character === 'beestyx' ? nav.style.display = 'flex' : nav.style.display = 'none')
            }
        })
    })
}