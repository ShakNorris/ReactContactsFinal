import React, { Component } from 'react'
import ContactListItem from './contact-list-item/ContactListItem'
import './ContactList.css'

class ContactList extends Component {
  render() {
    return (
      <div className='container'>
        <h4>კონტაქტები</h4>
        <hr />
        <br />
        <div>
          {this.props.contacts &&
            this.props.contacts.map((contact) => (
              <ContactListItem
                key={contact.id}
                contact={contact}
                handleShowEditForm = {this.props.handleShowEditForm}
                removeContact={this.props.handleRemoveContact}
              />
            ))}
        </div>
      </div>
    )
  }
}
export default ContactList
