import counterReducer from "./counterReducer";
import colorReducer from './colorReducer';
import dataReducer from './dataReducer';
import retgisterRedcuer from "./retgisterRedcuer";

const rootReducer = (state  , action) => ({
    counter: counterReducer(state.counter, action),
    color: colorReducer(state.color, action),
    users: dataReducer(state.users,action),
    registerData: retgisterRedcuer(state.registerData,action)
});

export default rootReducer;