import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [
      {
        firstName: 'Max', 
        lastName: 'Riley', 
        contactNumber: 12345678901
      }
    ]
  }

  addContact = (e) => {
    e.preventDefault()
    let list = this.state.contacts
    list.push({ 
      firstName: e.target[0].value, 
      lastName: e.target[1].value, 
      contactNumber: e.target[2].value
    })

    console.log(list)
    
    this.setState({contacts: list})
    console.log(this.state)
  }

  render(){

   return (
   <header className="App-header">
      <div className="container">
       <h2>New Contact</h2>
        <form onSubmit={e => this.addContact(e)}>
          <input placeholder="First Name" className="firstName"/>
          <input placeholder="Last Name" className="lastName"/>
          <input placeholder="Contact Number" className="contactNumber"/>
          <button type="submit" className="button">Add All</button>
        </form>
        <div className="contacts">
          {
            this.state.contacts.map(contact => <NewContact contact={contact}/>)
          }
        </div>
      </div>
    </header>
    );
  }
}

const NewContact = ({ contact }) => {
  return(
    <div className="contactContainer">
      <div className="name">
       {`${contact.firstName} ${contact.lastName}`}
      </div>
      <div className="number">
        {contact.contactNumber}
      </div>
    </div>
  )
}


export default App;
