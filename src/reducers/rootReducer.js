import counterReducer from "./counterReducer";
import colorReducer from './colorReducer';
import dataReducer from './dataReducer';
//import from another file
// const initialState = {
//     counter: 5,
//     color: '#E0E0E0',
//     users: []
// }
//= initialState
const rootReducer = (state  , action) => ({
    counter: counterReducer(state.counter, action),
    color: colorReducer(state.color, action),
    users: dataReducer(state.users,action)
});

export default rootReducer;