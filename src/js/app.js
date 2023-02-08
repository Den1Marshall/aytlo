import isWebp from './modules/isWebp';
import headerMobile from './modules/headerMobile';
import lowerbar from './modules/lowerbar';
import accordion from './modules/accordion';
import chooseBlock from './modules/chooseBlock';
import form from './modules/form';

isWebp()
headerMobile()
lowerbar()
accordion()
chooseBlock()
form()

const charactersSlider = tns({
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

const chooseSliderAsura = tns({
    container: '.choose__slider',
    navContainer: '.choose__slider-nav',
    controlsContainer: '.choose__slider-controls',
    loop: false,
})

const chooseSliderHeat = tns({
    container: '.choose__slider--heat',
    controlsContainer: '.choose__slider-controls',
    navContainer: '.choose__slider-nav--heat',
    loop: false,
})

const chooseSliderJumper = tns({
    container: '.choose__slider--jumper',
    controlsContainer: '.choose__slider-controls',
    navContainer: '.choose__slider-nav--jumper',
    loop: false,
})

const chooseSliderBeestyx = tns({
    container: '.choose__slider--beestyx',
    controlsContainer: '.choose__slider-controls',
    navContainer: '.choose__slider-nav--beestyx',
    loop: false,
})