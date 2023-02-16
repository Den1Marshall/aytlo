export default () => {
    const allLinksText = Array.from(document.querySelectorAll('a'));
    const allParaText = Array.from(document.querySelectorAll('p'));
    const h1Text = Array.from(document.querySelector('h1'));
    const h2Text = Array.from(document.querySelectorAll('h2'));
    const h3Text = Array.from(document.querySelectorAll('h3'));
    const h4Text = Array.from(document.querySelectorAll('h4'));
    const btnText = Array.from(document.querySelectorAll('button'));

    const arr = [allLinksText, allParaText, h1Text, h2Text, h3Text, h4Text]

    console.log(arr.forEach(textArray => textArray.forEach(elem => elem.textContent)))
}