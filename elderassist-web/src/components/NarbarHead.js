import React, { Component } from 'react';


export default class NarvarHead extends Component {
    render(){
        return(
            <nav className="navbar navbar-toggleable-md navbar-inverse" style={styles.nav}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Dashboard </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Notifications<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Users</a>
                        </li>
                    </ul>
                </div>
            </nav>
            

        )
    }
}
const styles = {
    nav : {
        backgroundColor: 'blue'
    }
}