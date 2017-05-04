import {
 ASKING_HELP_FETCH
} from '../actions/types';

const INITIAL_STATE = {
    asking : ''
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ASKING_HELP_FETCH:
            return {...state , asking : action.payload}
        default:
            return state;
    }
}
