import * as actions from "../components/register/register.actions";
const registerReducer = (registerData, action) => {
    // switch (action.type) {
    //     case actions.userChanged().type:
    //         return { ...registerData, user: action.payload };
    //     case actions.fetchError().type:
    //         return { ...registerData, err: action.payload };
    //     case /_changed/.test(action.type):
    //         return { ...registerData, [action.type.split('_')[0]]: action.payload };
    //     case 'IMAGE_CHANGED':
    //         return {...registerData, file: action.payload};
    //     default:
    //         return registerData;
    // }
    switch (/_changed/.test(action.type)) {
        case true:
            return action.type.split('_')[0] === 'fileName' ? { ...registerData, file: action.payload.files[0], fileName: action.payload.value  } :
                { ...registerData, [action.type.split('_')[0]]: action.payload };
        default:
            return { ...registerData };
    }
}
export default registerReducer;