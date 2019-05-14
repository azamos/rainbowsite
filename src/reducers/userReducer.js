const userReducer = (currentUser,action) => {
    switch(action.type){
        case 'USER_CHANGED':
            return action.payload;
        case 'FETCH_FAILED':
            return action.payload;
        default:
            return currentUser;
    }
}
export default userReducer;