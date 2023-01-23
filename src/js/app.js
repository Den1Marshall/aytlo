import isWebp from './modules/isWebp';
import lowerbarAddEventListeners from './modules/lowerbar';
import headerMobile from './modules/headerMobile';
import charactersCards from './modules/charactersCards';
import accordion from './modules/accordion';
import chooseBlock from './modules/chooseBlock';

isWebp()
lowerbarAddEventListeners()
headerMobile()
charactersCards()
accordion()
chooseBlock()

tns({
    container: '.characters__cards',
    controls: false,
    nav: false,
    mousedrag: true,
    loop: false,
    preventScrollOnTouch: 'auto',
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

tns({
    container: '.choose__slider',
    controlsContainer: '.choose__slider-controls',
    navContainer: '.choose__slider-nav',
    loop: false,
})

tns({
    container: '.choose__slider-heat',
    controlsContainer: '.choose__slider-controls',
    navContainer: '.choose__slider-nav',
    loop: false,
})