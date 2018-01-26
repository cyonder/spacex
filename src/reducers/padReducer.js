import { FETCH_PADS } from '../constants';

export default function padReducer(state = {}, action){
    switch(action.type){
        case FETCH_PADS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
