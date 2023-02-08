export default () => {
    const chooseSliders = document.querySelectorAll('.choose__slider');

    const chooseBtns = document.querySelector('.choose__buttons');
    const chooseBlock = document.querySelector('.choose__block');
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBlockFinalImage = chooseBlockFinal.querySelector('source');

    const goFutherBtn = document.querySelector('.choose__right-btn');
    goFutherBtn.addEventListener('click', () => {
        chooseBlockFinalImage.srcset = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlockFinalImage.src = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlock.style.display = 'none'
        chooseBtns.style.display = 'none'
        chooseBlockFinal.style.display = 'grid'
    })

    const goBackBtn = document.querySelector('.choose__go-back-btn');
    goBackBtn.addEventListener('click', () => {
        chooseBlock.style.display = 'grid'
        chooseBtns.style.display = 'flex'
        chooseBlockFinal.style.display = 'none'
    })

    const shareInTwitterBtn = document.querySelector('.choose__right-btn--form');
    const formInputs = Array.from(document.querySelectorAll('.form__input'));
    const formInputsClose = document.querySelectorAll('.form__input', ':before')

    formInputsClose.forEach(close => close.addEventListener('contextmenu', e => {
        e.target.innerHTML = ''
    }))

    formInputs.forEach(input => input.addEventListener('input', () => {
        formInputs.forEach(input => {
            input.textContent.length >= 1 ? input.classList.add('form__input--typing') : input.classList.remove('form__input--typing')
        })
    }))

    shareInTwitterBtn.addEventListener('click', e => {

        if (formInputs.find(input => input.innerHTML === '')) {
            e.preventDefault()
            formInputs.forEach(input => input.innerHTML === '' ? input.classList.add('form__input--empty') : input.classList.remove('form__input--empty'))
        }

        if (formInputs.find(input => (!input.innerHTML.includes('@')) || (input.innerHTML.length === 1) || (input.innerHTML.length >= 16))) {
            e.preventDefault()
            formInputs.forEach(input => (input.innerHTML !== '') && (!input.innerHTML.includes('@')) || (input.innerHTML.length === 1) || (input.innerHTML.length >= 16) ? input.classList.add('form__input--incorrect') : input.classList.remove('form__input--incorrect'))
        }

        else {formInputs.forEach(input => {
            input.classList.remove('form__input--empty')
            input.classList.remove('form__input--incorrect')
        })}

        let text = ``;

        formInputs.forEach(input => text += `${input.innerHTML}%20`)

        shareInTwitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}`)
    })
}