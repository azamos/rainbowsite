import { fields } from '../constants/main';
const registerReducer = (registerData, action) => {
    switch (/_changed/.test(action.type)) {
        case true:
            return action.type.split('_')[0] === 'fileName' ? { ...registerData, file: action.payload.files[0], fileName: action.payload.value } :
                { ...registerData, [action.type.split('_')[0]]: action.payload };
        default:
            return action.type === 'RESET_FIELDS' ? fields :
                { ...registerData };
    }
}
export default registerReducer;