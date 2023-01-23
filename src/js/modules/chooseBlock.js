export default () => {
    const chooseBlockBtns = document.querySelectorAll('.choose__buttons-btn');

    chooseBlockBtns.forEach(button => {
        button.addEventListener('click', e => {
            chooseBlockBtns.forEach(button => button.classList.remove('choose__buttons-btn--active'))

            if (e.target) {
                e.target.classList.add('choose__buttons-btn--active')
            };

            const asuraSlider = document.querySelector('.choose__slider');
            const heatSlider = document.querySelector('.choose__slider-heat');
            // const jumperSlider = document.querySelector('.choose__slider-jumper');
            // const beestyxSlider = document.querySelector('.choose__slider-beestyx');
            const sliders = [asuraSlider, heatSlider,];

            const asuraNav = document.querySelector('.choose__slider-nav');
            const heatNav = document.querySelector('.choose__slider-nav--heat');
            const navs = [asuraNav, heatNav,];

            const clearSliders = () => {
                sliders.forEach(slider => slider.style.display = 'none')
                navs.forEach(nav => nav.style.display = 'none')
            }

            // displaying current character
            if (e.target.dataset.character === 'asura') {
                clearSliders()
                asuraSlider.style.display = 'flex'
                asuraNav.style.display = 'flex'
            }
            if (e.target.dataset.character === 'heat') {
                clearSliders()
                heatSlider.style.display = 'flex'
                heatNav.style.display = 'flex'
            }
            // if (e.target.dataset.character === 'jumper') {
            //     sliders.forEach(slider => slider.style.display = 'none')
            //     jumperSlider.style.display = 'flex'
            // }
            // if (e.target.dataset.character === 'beestyx') {
            //     sliders.forEach(slider => slider.style.display = 'none')
            //     beestyxSlider.style.display = 'flex'
            // }
        })
    })
}