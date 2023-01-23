export default () => {
    const accordionHeaders = document.querySelectorAll('.accordion__item-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // clearing all classes for each click
            accordionHeaders.forEach(header => {
                header.classList.remove('accordion__item-header--active')
                header.nextElementSibling.style.maxHeight = null
            })
            // adding class for clicked item
            header.classList.toggle('accordion__item-header--active')

            // adding height for clicked item
            const accordionBody = header.nextElementSibling;
            if (accordionBody.style.maxHeight) {
                accordionBody.style.maxHeight = null;
            } else {accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"}
    })
})
    const accordionRightBg = document.querySelector('.accordion__right')
    accordionHeaders[0].addEventListener('click', () => {
        accordionRightBg.style.backgroundImage = `url('img/accordion/right/1.png')`
    })
    accordionHeaders[1].addEventListener('click', () => {
        accordionRightBg.style.backgroundImage = `url('img/accordion/right/2.png')`
    })
    accordionHeaders[2].addEventListener('click', () => {
        accordionRightBg.style.backgroundImage = `url('img/accordion/right/3.png')`
    })
    accordionHeaders[3].addEventListener('click', () => {
        accordionRightBg.style.backgroundImage = `url('img/accordion/right/4.png')`
    })
};