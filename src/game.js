import React, { Component } from 'react';
import './App.css';

import './index.css';
import  Contacts from './Contacts';

class Game extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }


  state = {
		contacts: [{
			name: 'Mehmet',
			phone: '123131231'
		},{
			name: 'Mesut',
			phone: '9384590834905'
		}]
  };
  


addContact(contact){
  const {contacts} = this.state;
  contacts.push(contact);
  this.setState({
    contacts
  });
}


	render() {
    return(
      <div className="App text-center text-dark" >
        <h1 className="text-primary border border-light ">Contact Add App</h1>
       <br/>

    <Contacts   contacts={this.state.contacts} addContact={this.addContact}/>
      </div>
    );
  }
}

export default Game;