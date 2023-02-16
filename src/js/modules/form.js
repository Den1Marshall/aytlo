import fadeOut from './fadeOut'
import fadeIn from './fadeIn'

export default () => {
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBlock = document.querySelector('.choose__block');
    const chooseBtns = document.querySelector('.choose__buttons');

    // go futher btn action
    const goFutherBtnClick = () => {
        const chooseBlockFinalImage = chooseBlockFinal.querySelector('source');
        const chooseSliders = document.querySelectorAll('.choose__slider');

        chooseBlockFinalImage.srcset = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlockFinalImage.src = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlock.style.display = 'none'
        chooseBtns.style.display = 'none'
        chooseBlockFinal.style.display = 'grid'
    }

    const goFutherBtn = document.querySelector('.choose__right-btn');
    goFutherBtn.addEventListener('click', goFutherBtnClick)

    // go back btn action
    const goBackBtnClick = () => {
        chooseBlock.style.display = 'grid'
        chooseBtns.style.display = 'flex'
        chooseBlockFinal.style.display = 'none'
    }

    const goBackBtn = document.querySelector('.choose__go-back-btn');
    goBackBtn.addEventListener('click', goBackBtnClick)

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
        const input = close.previousElementSibling;

        input.value = ''
        input.focus()
        input.classList = 'form__input'

        fadeOut(null, input.nextElementSibling.nextElementSibling.nextElementSibling, 100)
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
                    input.classList.add('form__input--error')
                    if (getComputedStyle(errorEmptyText).display === 'none') fadeIn(null, errorEmptyText, 100)
                } else {
                    input.classList.remove('form__input--error')
                    fadeOut(null, errorEmptyText, 100)
                }
            })
        }

        if (formInputs.find(input => (input.value[0] !== '@') || (input.value.length === 1))) {
            e.preventDefault()
            formInputs.forEach(input => {
                const incorrectText = input.nextElementSibling.nextElementSibling.nextElementSibling;
                
                if ((input.value !== '') && (input.value[0] !== '@') || (input.value.length === 1)) {
                    input.classList.add('form__input--error')
                    if (getComputedStyle(incorrectText).display === 'none') fadeIn(null, incorrectText, 100)
                    
                } else {
                    input.classList.remove('form__input--error')
                    fadeOut(null, incorrectText, 100)
                }
            })
        }

        else {
            formInputs.forEach(input => {
                input.classList.remove('form__input--error')
                fadeOut(null, input.nextElementSibling.nextElementSibling)
                fadeOut(null, input.nextElementSibling.nextElementSibling.nextElementSibling)
        })
    }

        let text = '';

        formInputs.forEach(input => text += `${input.value}%20`)

        shareInTwitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}`)
    })
}