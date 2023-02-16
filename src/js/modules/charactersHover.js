export default () => {
    const charactersWrapper = document.querySelector('.characters__cards');
    const characters = Array.from(document.querySelectorAll('.characters__card'));

    charactersWrapper.addEventListener('mouseover', e => {
        characters.forEach(character => {
            character.style.opacity = '0.4'
        })
        if ((e.target.nodeName === 'ARTICLE') || (e.target.nodeName === 'IMG') || (e.target.nodeName === 'H3') || (e.target.nodeName === 'P')) e.target.closest('article').style.opacity = '1'
    })

    charactersWrapper.addEventListener('mouseout', () => characters.forEach(character => character.style.opacity = '1'))
}