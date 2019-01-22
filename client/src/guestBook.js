import React, { Component } from 'react';
import axios from 'axios';
import './guestBook.css';

class GuestBook extends Component{
  constructor(props) {
    super(props);
    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: ""
    };
  }

  handleSignatureOfGuest(event) {
    this.setState({ SignatureOfGuest: event.target.value });
  }
  handleMessageofGuest(event) {
    this.setState({ MessageofGuest: event.target.value });
  }

  addToGuestBook = event => {
    event.preventDefault();
    axios.post('/api/signatures', {
      SignatureOfGuest: this.state.SignatureOfGuest,
      MessageofGuest: this.state.MessageofGuest,
    }).then(response => {
      console.log(response, 'Signature added!');
    }).catch(err => {
      console.log(err, 'Signature not added, try again');
    });
    this.setState({
      SignatureOfGuest: "",
      MessageofGuest: "",
    });
  };

  render() {
    return (
      <div>
      <input
        onChange={this.handleSignatureOfGuest}
        className="NameinputForm"
        value={this.state.SignatureOfGuest}
        placeholder="Name"
      /><br/>
      <textarea
        onChange={this.handleMessageofGuest}
        className="MessageinputForm"
        value={this.state.MessageofGuest}
        placeholder="Write your message here. don't forget to B-nice"
      /><br/>
      <button
        className="submitbuttonguestbook"
        type="submit"
        onClick={this.addToGuestBook}
      >
      <span className="submit-message">submit message</span> 
      </button>
      </div>
    );
  }
}

export default GuestBook;