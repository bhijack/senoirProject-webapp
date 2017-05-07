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

        firebase.database().ref('askingHelp/')
            .on('value', snapshot => {
                console.log('snap : ',snapshot.toJSON())
                var asks =[]
                snapshot.forEach(data =>{

                    var ask ={
                        owner: data.val().help.owner,
                        situations : data.val().help.situations,
                        timestamp : data.val().help.timestamp,
                        status : data.val().help.status                    
                    }
                    asks.push(ask);
                    console.log('ask', ask)
                })
                    console.log('asks', asks)
                    this.setState({
                        items : asks
                    })
                    console.log('item ',typeof(this.state.items))
                
                })
                
                

    }

    // situationList(){
        
    //     return this.state.items.map((v,i) => {
    //         console.log('v',v);
    //         console.log('i',i);
    //         return(
    //             <p className="card-text">{v.situations}</p>
    //         )
    //     })

    // }
 
    itemsList() {
        return this.state.items.map((v, i) => {
            console.log('v ', v.timestamp)
            console.log('i', i);
            var date = new Date(v.timestamp);
            var hours = date.getHours();
            var mins = date.getMinutes();
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            
            
            console.log('sit',v.situations);
            return (
                <div className="row" style={{ marginTop: 10 }}>
                    <div className="col-md-8 offset-md-2">
                        <div className="card w-100" >
                            <div className="card-block">
                                <h3 className='card-text'>Owner : {v.owner}</h3>
                               <p> Situation : {v.situations+""}</p>
                                <p className="card-text">Status : {v.status}</p>
                                <div className="row">
                                    <div className="col-md-2 " style={{ alignSelf: 'center' }}>
                                        {hours} : {mins}
                                    </div>
                                    <div className="col-md-2 " style={{ alignSelf: 'center' }}>
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
