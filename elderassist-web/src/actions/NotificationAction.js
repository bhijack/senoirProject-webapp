import {
    ASKING_HELP_FETCH
} from './types';
import * as firebase from 'firebase';


export const notificationFetch = () => {
    return (dispatch) => {
        firebase.database().ref('askingHelp/sampleHelp')
            .on('value', snapshot => {
                var items = [];
                snapshot.forEach(data => {
                    var item = {
                        ask: data.val().help
                    }
                    items.push(item.ask)
                    // dispatch({
                    //     type : ASKING_HELP_FETCH,
                    //     payload : items
                    // })
                })
                dispatch({
                        type : ASKING_HELP_FETCH,
                        payload : items
                    })
            })
    }

}