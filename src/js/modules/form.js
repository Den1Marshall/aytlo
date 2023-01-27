export default () => {
    'use strict'
    const goFutherBtn = document.querySelector('.choose__right-btn');

    const chooseBlock = document.querySelector('.choose__block');
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBtns = document.querySelector('.choose__buttons');

    goFutherBtn.addEventListener('click', () => {
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

    const formInputsNotArray = document.querySelectorAll('.form__input-text')

    const formInputs = Array.from(formInputsNotArray)

    const checkForEmptyInput = () => formInputs.filter(input => input.value !== '').forEach(input => input.style.background = 'rgba(255, 255, 255, 0.08)')

    formInputs.forEach(input => input.addEventListener('change', checkForEmptyInput))
}