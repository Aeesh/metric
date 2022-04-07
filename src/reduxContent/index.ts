import { combineReducers } from 'redux';

import getDataReducer from './addWallet/reducers';

const rootReducer = combineReducers({
    data: getDataReducer
});

export default rootReducer;
