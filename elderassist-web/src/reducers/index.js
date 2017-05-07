import {combineReducers} from 'redux';
import NotificationReducer from './NotificationReducer';

export const reducers = combineReducers({
    noti : NotificationReducer
})