import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import NarbarHead from '../components/NarbarHead';
import ListNoti from '../components/ListNoti';


export default class NotificationList extends Component {

    render() {
        return (
            <div>
                <div>
                    <NarbarHead />
                </div>
                <div>
                    <ListNoti />
                </div>

            </div>
        );
    }
}



