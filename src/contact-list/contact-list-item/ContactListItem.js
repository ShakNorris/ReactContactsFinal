import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPencilAlt, faPhone, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './ContactListItem.css'

function ContactListItem({contact,removeContact, handleShowEditForm}) {
  return (
    <div className='d-inline-block card mt-3 mr-3'>
      <div className='card-body'>
        <p><FontAwesomeIcon icon={faUser} /> {contact.name}</p>
        <p><FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
        <p>{contact.id}</p>

        <button
          className='btn btn-danger float-right ml-2 mb-2'
          onClick={() => removeContact(contact.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button
          className='btn btn-warning float-right ml-2'
          onClick={() => handleShowEditForm(contact.id)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    </div>
  )
}

export default ContactListItem
