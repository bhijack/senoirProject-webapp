import {
    ASKING_HELP_FETCH,
    GET_NAME_OWNER
} from './types';
import * as firebase from 'firebase';


export const notificationFetch = () => {
    return (dispatch) => {
        firebase.database().ref('askingHelp/')
            .on('value', snapshot => {
                var asks = []
                snapshot.forEach(data => {

                    var ask = {
                        owner: data.val().help.owner,
                        situations: data.val().help.situations,
                        timestamp: data.val().help.timestamp,
                        status: data.val().help.status
                    }
                    asks.push(ask);

                })
                dispatch({
                    type: ASKING_HELP_FETCH,
                    payload: asks
                })

            })
    }

}

