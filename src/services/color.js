
import { picked_color, triggered_rainbow } from "../components/colorPicker/colorPicker.actions";

const maxLim = 255;
//const minLim = 0;
const interval = 30;

const colorIterator = (c, rgbIndex, originalColor, dispatch) => //rgbIndex = 0 | 1 | 2, 0 === R, 1 === G, 2 === B
    c < maxLim ?
        (() => {
            originalColor = newColor(originalColor, rgbIndex, c);
            dispatch(picked_color(originalColor))
            dispatch(triggered_rainbow(setTimeout(colorIterator, interval, ++c, rgbIndex, originalColor, dispatch)))
        })() :
        (() => {
            ++rgbIndex < 3 ? colorIterator(0, rgbIndex, originalColor, dispatch) : (() => { dispatch(triggered_rainbow(null)) })()
        })()

const newColor = (originalColor, rgbIndex, value) => {
    const newRgb = HEXtoRGB(originalColor);
    newRgb[rgbIndex] = value;
    return '#' + decToHex(newRgb[0]) + decToHex(newRgb[1]) + decToHex(newRgb[2]);
}

export const rainBow = (dispatch,color) => {
    color.colorTimer ? (()=>{
        clearTimeout(color.colorTimer);
        dispatch(triggered_rainbow(null))
    })() : 
    colorIterator(0, 0, color.value, dispatch);
}

export const HEXtoRGB = hexStringColor => {
    const decimals = hexStringColor.toLowerCase().substr(1).split('');
    const [r1, r2, g1, g2, b1, b2] = decimals.map(c => hexToDec(c));
    return [r1 * 16 + r2, g1 * 16 + g2, b1 * 16 + b2];
}

const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
const dic = abc.map((c, index) => index + 1);

const alphaToNumeric = c => abc.indexOf(c) === -1 ? parseInt(c) : dic[abc.indexOf(c)];
const numbericToAlpha = num => num > 9 && num < 16 ? abc[num - 10] : num.toString();

const hexToDec = c => /[a-f]/.test(c) ? 9 + alphaToNumeric(c) : parseInt(c);

const reverseColor = hexStringColor => HEXtoRGB(hexStringColor).map(c => 255 - c);

const decToHex = num => (numbericToAlpha(Math.floor(num / 16)) + numbericToAlpha(num - Math.floor(num / 16) * 16)).toUpperCase();

const contrastingColor = hexDexColor => {
    const rgbArray = reverseColor(hexDexColor);
    return '#' + decToHex(rgbArray[0]) + decToHex(rgbArray[1]) + decToHex(rgbArray[2]);
}

export default contrastingColor;