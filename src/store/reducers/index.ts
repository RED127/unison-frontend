import { combineReducers } from 'redux';

import auth from './auth';
import notification from './notification';
import snackbar from './snackbar';

const reducer = combineReducers({
    auth,
    snackbar,
    notification
});

export default reducer;
