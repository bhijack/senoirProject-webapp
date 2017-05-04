import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';
class App extends Component {
  render() {
    return (
      <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
    );
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyAiAzDFE1y1uOeIjIyPKcRdHc-LSc4q2PU",
  authDomain: "elderassist-2bb0c.firebaseapp.com",
  databaseURL: "https://elderassist-2bb0c.firebaseio.com",
  storageBucket: "elderassist-2bb0c.appspot.com",
  messagingSenderId: "552935548867"
};
const firebaseTest = firebase.initializeApp(firebaseConfig);
export default App;
