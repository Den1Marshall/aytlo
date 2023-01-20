export default () => {
    const characterCardsWrapper = document.querySelector('.characters__cards');
    const charactersCards = document.querySelectorAll('.characters__card');

    characterCardsWrapper.addEventListener('mouseover', e => {
        charactersCards.forEach(card => {
            card.style.opacity = '0.4'

            if (e.target) {
                e.target.parentNode.style.opacity = '1'
                e.target.style.opacity = '1'
            }
        })
    })

    characterCardsWrapper.addEventListener('mouseout', () => {
        charactersCards.forEach(card => card.style.opacity = '1')
    })

    charactersCards[0].addEventListener('mouseover', () => {
        charactersCards[0].classList.add('card-animation__heat')
    })
    charactersCards[0].addEventListener('mouseout', () => {
        charactersCards[0].classList.remove('card-animation__heat')
    })
}