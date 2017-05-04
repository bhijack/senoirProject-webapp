import React, { Component } from 'react';
// import {connect} from 'react-redux';
import * as firebase from 'firebase';

// import {notificaitonFetch} from '../actions';

export default class ListNoti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.itemsList = this.itemsList.bind(this);
    }

    componentWillMount() {

        firebase.database().ref('askingHelp/sampleHelp')
            .on('value', snapshot => {
                var asks = []
                snapshot.forEach(data => {
                    var ask = {
                        owner: {
                            fname: data.val().owner.name.fname,
                            lname: data.val().owner.name.lname
                        },
                        situation: data.val().situation,
                        status: data.val().status,
                        timestamp: data.val().timestamp
                        // data : data.val()
                    }
                    asks.push(ask);
                    console.log('data', asks[0].situation)
                    this.setState({
                        items: asks
                    })
                    // var json = JSON.parse(this.state.items[0])
                    console.log('item', this.state.items[0].situation)
                })
            })
    }

    itemsList(){
        return this.state.items.map((v,i) => {
            console.log('v ',v.timestamp)
            console.log('i' ,i);
            var date = new Date(v.timestamp);
            var hours = date.getHours();
            var mins = date.getMinutes();
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            return(
                <div className="row" style={{ marginTop: 10 }}>
                <div className="col-md-8 offset-md-2">
                    <div className="card w-100" >
                        <div className="card-block">

                            <h3 className="card-title">{v.owner.fname} {v.owner.lname}</h3>
                            <p className="card-text">Situation : {v.situation}</p>
                            <p className="card-text">Status : {v.status}</p>
                            <div className="row">
                                <div className="col-md-2 " style={{alignSelf:'center'}}>
                                    {hours} : {mins}
                                </div>
                                <div className="col-md-2 " style={{alignSelf:'center'}}>
                                    {day} /{month}/ {year}
                                </div>
                                <div className="col-md-2 offset-md-6 col-sm-3 offset-sm-9 col-xs-1 offset-xs-11">
                                    <a href="#" className="btn btn-success">Detail</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }

    render() {
        return (
            <div>
            {this.itemsList()}
            </div>
        )
    }
}