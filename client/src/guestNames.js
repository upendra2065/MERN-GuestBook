import React, { Component } from 'react';
import './guestNames.css';

class GuestNames extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages:"",
        };
    }
    componentDidMount() {
        fetch('/api/signatures')
        .then(results => {
            return results.json();
        })
        .then(data => {
            let messages = data.map((msg) => {
                return (
                    <div key={msg.results} className="messages-container">
                        <div className="guest-signature"><span className="by">~by</span> <span className="text-signature">{msg.guestSignature}</span></div>
                        <div className="guest-message">"{msg.message}"</div>
                    </div>
                )
            })
            this.setState({messages: messages})
            console.log(this.state.messages)
        
        })
    }
    render() {
        return (
            <div  >
                {this.state.messages}
            </div>
        )
    }
}

export default GuestNames;