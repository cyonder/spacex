import { FETCH_COMPANY_INFO } from '../constants';

export default function companyInfoReducer(state = {}, action){
    switch(action.type){
        case FETCH_COMPANY_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
