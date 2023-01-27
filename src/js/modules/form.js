export default () => {
    'use strict'
    const goFutherBtn = document.querySelector('.choose__right-btn');

    const chooseBtns = document.querySelector('.choose__buttons');
    const chooseBlock = document.querySelector('.choose__block');
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBlockFinalImage = chooseBlockFinal.querySelector('source');
    const chooseSliders = document.querySelectorAll('.choose__slider');

    goFutherBtn.addEventListener('click', () => {
        chooseBlockFinalImage.srcset = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlockFinalImage.src = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlock.classList.add('fadeOut_02s')
        chooseBtns.classList.add('fadeOut_02s')
        chooseBlock.addEventListener('animationend', () => {
            chooseBlock.classList.remove('fadeOut_02s')
            chooseBtns.classList.remove('fadeOut_02s')
            chooseBlock.style.display = 'none'
            chooseBtns.style.display = 'none'
            chooseBlockFinal.style.display = 'grid'
        })
    })

    // const formInputs = Array.from(document.querySelectorAll('.form__input-text'))

    // const checkForEmptyInput = () => formInputs.filter(input => input.value !== '').forEach(input => input.style.background = 'rgba(255, 255, 255, 0.08)')

    // formInputs.forEach(input => input.addEventListener('input', checkForEmptyInput))

    const inputs = Array.from(document.querySelectorAll('form__input'))

    const checkInput = () => {

        inputs.filter(input => input.value.contains('@')) ? null : console.log('pizdec');
    }

    inputs.forEach(input => input.addEventListener('input', checkInput))
}