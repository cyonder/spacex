import {
    FETCH_PAST_LAUNCHES,
    FETCH_UPCOMING_LAUNCHES
} from '../constants';

const initialState = {
    pastLaunches: [],
    upcomingLaunches: []
};

export default function launchReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PAST_LAUNCHES:
            return { ...state, pastLaunches: [ ...state.pastLaunches, ...action.payload ] }
        case FETCH_UPCOMING_LAUNCHES:
            return { ...state, upcomingLaunches: [ ...state.upcomingLaunches, ...action.payload ] }
        default:
            return state;
    }
}
