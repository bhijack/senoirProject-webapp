import {
 ASKING_HELP_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
    listNoti : null,

}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ASKING_HELP_FETCH:
            return {listNoti:action.payload}

        default:
            return state;
    }
}
