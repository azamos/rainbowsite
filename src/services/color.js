
import { picked_color, triggered_rainbow, rgb_changed } from "../components/colorPicker/colorPicker.actions";

const maxLim = 256;
const minLim = -1;
const interval = 30;
const inc = true;
const dec = false;

const colorIterator = (c, rgbIndex, originalColor, dispatch, action) => //rgbIndex = 0 | 1 | 2, 0 === R, 1 === G, 2 === B
    (action ? ++c < maxLim : --c > minLim) ? // if action === inc, then check if c<255, else, check if c>0
        (() => {
            const nC = originalColor;
            nC.value = newColor(originalColor.value, rgbIndex, c);
            nC.rgb[rgbIndex] = c;
            dispatch(picked_color(nC.value))
            dispatch(rgb_changed(rgbIndex, c))
            dispatch(triggered_rainbow(setTimeout(colorIterator, interval, c, rgbIndex, nC, dispatch, action)))
        })() ://if reached max num, next color
        (() => {
            (action ? ++rgbIndex < 3 : --rgbIndex >= 0) ?
                colorIterator(originalColor.rgb[rgbIndex], rgbIndex, originalColor, dispatch, action) :
                //else, switch direction
                (() => {
                    rgbIndex = action ? 2 : 0;
                    colorIterator(originalColor.rgb[rgbIndex], rgbIndex, originalColor, dispatch, !action)
                })()
        })()

const newColor = (originalColor, rgbIndex, value) => {
    const newRgb = HEXtoRGB(originalColor);
    newRgb[rgbIndex] = value;
    return '#' + decToHex(newRgb[0]) + decToHex(newRgb[1]) + decToHex(newRgb[2]);
}

export const rainBow = (dispatch, color) => {
    color.colorTimer ? (() => {
        clearTimeout(color.colorTimer);
        dispatch(triggered_rainbow(null))
    })() : (() => {
        colorIterator(color.rgb[0], 0, color, dispatch, color.rgb[2] === maxLim ? dec : inc);
    })()
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