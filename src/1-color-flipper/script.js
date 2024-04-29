const body = document.body;
const flipBtn = document.querySelector('#flip-color-btn');
const copyBtn = document.querySelector('#clipboard-btn');

let color = ''; 
let inverseColor = '';

const hexDigit = (num) => num < 10 ? String(num) : String.fromCharCode('A'.charCodeAt(0) + num-10)

const randHexNibble = () => hexDigit(Math.floor(Math.random() * 16))

const randHexByte = () => `${randHexNibble()}${randHexNibble()}`

const randColorRgb = () => `#${randHexByte()}${randHexByte()}${randHexByte()}`

const randColorRgba = () => `#${randHexByte()}${randHexByte()}${randHexByte()}${randHexByte()}`;


const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
}

const inverseRGBA = (color) => {
    const [_match, r,g,b,a] = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i);
    const inverseComponents = ([r,g,b,a]).reduce((arr, cmp) => {
        const inverseValue = cmp ? 255 - parseInt(cmp, 16) : 255;
        const inverseComponent = inverseValue >= 16 ? inverseValue.toString(16) : `0${inverseValue.toString(16)}`;
        return [...arr, inverseComponent]
    }, []);

    return `#${inverseComponents.join('')}`
}

const flipColor = () => {
    color = randColorRgb();
    const inverseColor = inverseRGBA(color);

    flipBtn.textContent = color;
    body.style.backgroundColor = color;
    flipBtn.style.color = inverseColor;
    flipBtn.style.borderColor = inverseColor;
    flipBtn.style.textShadow = `0 0 .6rem ${color}`;
    copyBtn.style.color = inverseColor;
    copyBtn.style.borderColor = inverseColor;
    copyBtn.style.fill = inverseColor;
    copyBtn.style.textShadow = `0 0 .6rem ${color}`;
}

flipBtn.addEventListener("click", flipColor)
copyBtn.addEventListener("click", copyToClipboard)


flipColor();
