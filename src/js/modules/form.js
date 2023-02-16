import fadeOut from './fadeOut'
import fadeIn from './fadeIn'

export default () => {
    const goFutherBtn = document.querySelector('.choose__right-btn');
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBlock = document.querySelector('.choose__block');
    const chooseBtns = document.querySelector('.choose__buttons');

    // go futher btn action
    goFutherBtn.addEventListener('click', () => {
        const chooseBlockFinalImage = chooseBlockFinal.querySelector('source');
        const chooseSliders = document.querySelectorAll('.choose__slider');

        chooseBlockFinalImage.srcset = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlockFinalImage.src = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlock.style.display = 'none'
        chooseBtns.style.display = 'none'
        chooseBlockFinal.style.display = 'grid'
    })

    // go back btn action
    const goBackBtn = document.querySelector('.choose__go-back-btn');
    goBackBtn.addEventListener('click', () => {
        chooseBlock.style.display = 'grid'
        chooseBtns.style.display = 'flex'
        chooseBlockFinal.style.display = 'none'
    })

    // form inputs & form close buttons declaration
    const formInputs = Array.from(document.querySelectorAll('.form__input'));
    const formInputsClose = Array.from(document.querySelectorAll('.form__input-close'))
    
    // displaying close btn if input is not empty
    formInputs.forEach(input => input.addEventListener('input', () => {
        const close = input.nextElementSibling;

        if (input.value.length > 0) {
            input.classList.add('form__input--typing')
            if (getComputedStyle(close).display === 'none') {
                fadeIn(null, close, 100)
            }
        } else {
            input.classList.remove('form__input--typing')
            fadeOut(null, close, 100)
        }
    }))

    // clearing input on close btn click
    formInputsClose.forEach(close => close.addEventListener('click', e => {
        e.preventDefault()
        close.previousElementSibling.value = ''
        close.previousElementSibling.focus()
        fadeOut(null, close, 100)
    }))

    // share in twitter button click function
    const shareInTwitterBtn = document.querySelector('.choose__right-btn--form');

    shareInTwitterBtn.addEventListener('click', e => {
        if (formInputs.find(input => input.value === '')) {
            e.preventDefault()
            formInputs.forEach(input => {
                const errorEmptyText = input.nextElementSibling.nextElementSibling;

                if (input.value === '') {
                    input.classList.add('form__input--empty')
                    if (getComputedStyle(errorEmptyText).display === 'none') fadeIn(null, errorEmptyText, 100)
                } else {
                    input.classList.remove('form__input--empty')
                    fadeOut(null, errorEmptyText, 100)
                }
            })
            return
        }

        if (formInputs.find(input => (!input.value[0] === ('@')) || (input.value.length === 1) || (input.value.length >= 16))) {
            e.preventDefault()
            formInputs.forEach(input => (input.value !== '') && (!input.value[0] === ('@')) || (input.value.length === 1) || (input.value.length >= 16) ? input.classList.add('form__input--incorrect') : input.classList.remove('form__input--incorrect'))
        }

        else {
            formInputs.forEach(input => {
                input.classList.remove('form__input--empty')
                input.classList.remove('form__input--incorrect')
                fadeOut(null, input.nextElementSibling.nextElementSibling)
        })
    }

        let text = ``;

        formInputs.forEach(input => text += `${input.innerHTML}%20`)

        shareInTwitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}`)
    })
}