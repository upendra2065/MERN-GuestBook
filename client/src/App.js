import React, { Component} from 'react';
import './App.css';
import GuestBook from "./guestBook.js";
import GuestNames from "./guestNames.js";

class App extends Component {
    render(){
        return (
            <div class="guestbook-container">
                <div className="mern-guestbook">MERN GuestBook</div>
                <p className="tell-us-what-you-think">Tell us what you think!</p>
                <GuestBook/>
                <GuestNames/>
            </div>
        )
    }
}

export default App;