const counterReducer = (counter, action) => {
    switch (action.type) {
        case 'ADD':
            return counter + 1;
        case 'DEC':
            return counter - 1;
        default: return counter;
    }
}
export default counterReducer