import * as actions from '../components/data/dataCruncher.actions';
const dataReducer = (users,action) => {
    switch(action.type){
        case actions.fetchOK:
        return action.payload;
        case actions.fetchBad:
        return action.payload;
        default:
        return users;
    }
}
export default dataReducer;