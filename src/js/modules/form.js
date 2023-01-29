export default () => {
    const goFutherBtn = document.querySelector('.choose__right-btn');
    const chooseSliders = document.querySelectorAll('.choose__slider');

    const chooseBtns = document.querySelector('.choose__buttons');
    const chooseBlock = document.querySelector('.choose__block');
    const chooseBlockFinal = document.querySelector('.choose__block-final');
    const chooseBlockFinalImage = chooseBlockFinal.querySelector('source');

    goFutherBtn.addEventListener('click', () => {
        chooseBlockFinalImage.srcset = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        chooseBlockFinalImage.src = Array.from(chooseSliders).find(slider => slider.style.display === 'flex').querySelector('.tns-slide-active').src
        // chooseBlock.classList.add('fadeOut_02s')
        // chooseBtns.classList.add('fadeOut_02s')
        // chooseBlock.addEventListener('animationend', () => {
        //     chooseBlock.classList.remove('fadeOut_02s')
        //     chooseBtns.classList.remove('fadeOut_02s')
        //     chooseBlock.style.display = 'none'
        //     chooseBtns.style.display = 'none'
        //     chooseBlockFinal.style.display = 'grid'
        // })
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
    const formInputs = Array.from(document.querySelectorAll('.form__input'))

    shareInTwitterBtn.addEventListener('click', () => {
        let text = ``;
        for (let i = 0; i < formInputs.length; i++) {
            text += `${formInputs[i].value}%20`
        } 
        shareInTwitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}`)
    })

    console.log(    shareInTwitterBtn.getAttribute('href'));
}