import isWebp from './modules/isWebp';
import lowerbarAddEventListeners from './modules/lowerbar';
import headerMobile from './modules/headerMobile';
import charactersCards from './modules/charactersCards';

isWebp()
lowerbarAddEventListeners()
headerMobile()
charactersCards()

tns({
    container: '.characters__cards',
    controls: false,
    nav: false,
    mousedrag: true,
    loop: false,
    arrowKeys: true,
    responsive: {
        375: {
            items: 1,
            fixedWidth: 320,
        },

        577: {
            items: 2,
        },

        769: {
            fixedWidth: false,
            autoWidth: true,
            edgePadding: 50
        },

        993: {
            items: 3,
        },

        1201: {
            items: 4
        }
    }
})