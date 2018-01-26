import { combineReducers } from 'redux';

import companyInfoReducer from './companyInfoReducer';
import launchReducer from './launchReducer';
import rocketReducer from './rocketReducer';
import padReducer from './padReducer';

const rootReducer = combineReducers({
    companyInfo: companyInfoReducer,
    launches: launchReducer,
    rockets: rocketReducer,
    pads: padReducer
});

export default rootReducer;
