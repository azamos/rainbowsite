const colorReducer = (color,action) => {
    switch(action.type){
        case 'PICKED_COLOR':
        return action.payload;
        default:
        return color;
    }
}
export default colorReducer;