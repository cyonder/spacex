import { FETCH_ROCKETS } from '../constants';

export default function rocketsReducer(state = {}, action){
    switch(action.type){
        case FETCH_ROCKETS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
