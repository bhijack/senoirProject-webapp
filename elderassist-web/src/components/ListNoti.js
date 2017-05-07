import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notificationFetch} from '../actions';


class ListNoti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.itemsList = this.itemsList.bind(this);
    }


    componentWillMount() {
        this.props.notificationFetch();
    }




    itemsList() {
        var { listNoti } = this.props;
        if (listNoti != null) {

           return listNoti.map((v, i) => {
                console.log('owner ',v.owner.fname)
                var date = new Date(v.timestamp);
                var hours = date.getHours();
                var mins = date.getMinutes();
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                
                var labelHours = hours >= 0 && hours <= 9? "0"+hours : hours
                var labelMins = mins >= 0 && mins <= 9? "0"+mins : mins
                var nameMonth = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
                var labelDate = day+" "+nameMonth[month]+" "+year
                return (
                    <div className="row" style={{ marginTop: 10 }} key={i}>
                        <div className="col-md-8 offset-md-2">
                            <div className="card w-100" >
                                <div className="card-block">
                                    <h3 className='card-text'>Owner : {v.owner.fname} {v.owner.lname}</h3>
                                    <p> Situation : {v.situations + ""}</p>
                                    <p className="card-text">Status : {v.status}</p>
                                    <div className="row">
                                        <div className="col-md-2 " style={{ alignSelf: 'center' }}>
                                            {labelHours} : {labelMins}
                                        </div>
                                        <div className="col-md-2 " style={{ alignSelf: 'center' }}>
                                            {labelDate}
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


        }else{
            <div>
                LOADING....
            </div>
        }

    }

    render() {
        return (
            <div>
                {this.itemsList()}
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { listNoti } = state.noti;
    return { listNoti }
}
export default connect(mapStateToProps, { notificationFetch })(ListNoti);