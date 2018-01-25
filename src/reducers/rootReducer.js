import { combineReducers } from 'redux';

import companyInfoReducer from './companyInfoReducer';
import launchReducer from './launchReducer';

const rootReducer = combineReducers({
    companyInfo: companyInfoReducer,
    launches: launchReducer
});

export default rootReducer;
