const colorReducer = (color, action) => {
    switch (action.type) {
        case 'PICKED_COLOR':
            return { ...color, value: action.payload };
        case 'RAINBOW':
            return { ...color, colorTimer: action.payload }
        case 'RGB':
            const i = action.payload.rgbIndex;
            const value = action.payload.value;
            !value?console.log(color.rgb):(()=>{})();
            let x = JSON.parse(JSON.stringify(color.rgb))
            x[i] = value;
            return { ...color, rgb: x }
        default:
            return color;
    }
}
export default colorReducer;