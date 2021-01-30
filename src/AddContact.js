import React, { Component } from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import propTypes from 'prop-types'
import * as db from './data'

class AddContact extends Component {

  static propTypes = {
    handleAddContact : propTypes.func.isRequired,
    hanldeChange : propTypes.func.isRequired
  }

  state = {
    id: Date.now(),
    name: '',
    phone: '',
    email: '',
    errors: {
      name:'',
      phone: '',
      email: ''
    }
  }

  handleValidation(){
    let isFormValid = true;
    let errors = {};

    //name
    if(this.state.name === ''){
      isFormValid = false;
      errors.name = "Name can't be empty";
    }

    if(typeof this.state.name !== "undefined")
    {
      if(!this.state.name.match(/^[a-zA-Z]+$/)){
        isFormValid = false;
        errors.name = "Name is not valid";
      }
    }

    //phone
    if(this.state.phone === ''){
      isFormValid = false;
      errors.phone = "Phone can't be empty";
    }

    if(typeof this.state.phone !==  "undefined"){
      if(!this.state.phone.match(/^\+[0-9]{1,3}[0-9]{4,9}(?:x.+)?$/)){
        isFormValid = false;
        errors.phone = "Phone is not valid";
      }
    }

    //email
    if(this.state.email === ''){
      isFormValid = false;
      errors.email = "E-Mail can't be empty";
    }

    if(typeof this.state.email !== "undefined")
    {
      const rex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!this.state.email.match(rex)){
        isFormValid = false;
        errors.email = "E-Mail is not valid"
      }
    }

    this.setState({errors: errors});
    return isFormValid;
  }


  hanldeChange = (event) => {
    const { name, value } = event.target
    this.setState(
      {
        [name]: value,
      },
      () => {}
    )
  }

  save = () => {
    if(this.handleValidation()){
      db.addContact(this.state)
      this.props.handleAddContact(this.state)
      this.props.close()
    }
    else
    {
      alert("Form has errors.")
    }
  }

  render() {
    return (
    <div className='container filter-form'>
      <h4>კონტაქტის დამატება</h4>
      <hr />
      <br />
          <form>
          <ContactForm 
          hanldeChange = {this.hanldeChange}
          />
          <button
            type='button'
            id = 'submit'
            value = 'Submit'
            className='btn btn-success mr-1'
            onClick={this.save}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => this.props.close()}
          >
            <FontAwesomeIcon icon = {faWindowClose} />
          </button>
          <div className = "mt-3">
            <span style={{color : "red", fontWeight: "bold"}}>{this.state.errors.name}</span>
            <span style={{color : "red", fontWeight: "bold",display: "block"}}>{this.state.errors.phone}</span>
            <span style={{color : "red",fontWeight: "bold"}}>{this.state.errors.email}</span>
          </div>
          </form>
      </div>
    )
  }
}

// AddContact.propTypes = {
//   handleAddContact : propTypes.func.isRequired,
//   hanldeChange : propTypes.func.isRequired
// }

export default AddContact