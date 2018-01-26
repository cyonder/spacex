import axios from 'axios';

import {
    ROOT_API_URL,
    FETCH_COMPANY_INFO,
    FETCH_PAST_LAUNCHES,
    FETCH_UPCOMING_LAUNCHES,
    FETCH_ROCKETS,
    FETCH_PADS
} from '../constants';

export const fetchCompanyInfoSuccess = (companyInfo) => {
    return {
        type: FETCH_COMPANY_INFO,
        payload: companyInfo
    }
}

export const fetchPastLaunchesSuccess = (launches) => {
    return {
        type: FETCH_PAST_LAUNCHES,
        payload: launches
    }
}

export const fetchUpcomingLaunchesSuccess = (launches) => {
    return {
        type: FETCH_UPCOMING_LAUNCHES,
        payload: launches
    }
}

export const fetchRocketsSuccess = (rockets) => {
    return {
        type: FETCH_ROCKETS,
        payload: rockets
    }
}

export const fetchPadsSuccess = (pads) => {
    return {
        type: FETCH_PADS,
        payload: pads
    }
}

export const fetchCompanyInfo = (callback) => {
    return dispatch => {
        axios.get(`${ROOT_API_URL}/info`)
            .then(response => {
                dispatch( fetchCompanyInfoSuccess(response.data) );
            })
            .then( () => callback() )
    }
}

export const fetchPastLaunches = (callback) => {
    return dispatch => {
        axios.get(`${ROOT_API_URL}/launches`)
            .then(response => {
                dispatch( fetchPastLaunchesSuccess(response.data) );
            })
            .then( () => callback() )
    }
}

export const fetchUpcomingLaunches = (callback) => {
    return dispatch => {
        axios.get(`${ROOT_API_URL}/launches/upcoming`)
            .then(response => {
                dispatch( fetchUpcomingLaunchesSuccess(response.data) );
            })
            .then( () => callback() )
    }
}

export const fetchRockets = (callback) => {
    return dispatch => {
        axios.get(`${ROOT_API_URL}/rockets`)
            .then(response => {
                dispatch( fetchRocketsSuccess(response.data) );
            })
            .then( () => callback() )
    }
}

export const fetchPads = (callback) => {
    return dispatch => {
        axios.get(`${ROOT_API_URL}/launchpads`)
            .then(response => {
                dispatch( fetchPadsSuccess(response.data) );
            })
            .then( () => callback() )
    }
}
