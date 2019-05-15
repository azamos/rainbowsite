const colorReducer = (color, action) => {
    switch (action.type) {
        case 'PICKED_COLOR':
            return { ...color, value: action.payload };
        case 'RAINBOW':
            return { ...color, colorTimer: action.payload }
        default:
            return color;
    }
}
export default colorReducer;