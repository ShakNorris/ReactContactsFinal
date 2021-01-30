import fire from './config/fire'


  export function getContacts(){
    // const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    const contacts = [];
    fire.database().ref(`contacts/`).on('value', snapshot => {
      var contactData = snapshot.val();
      for(let id in contactData){
        contacts.push(contactData[id]);
      }
    });
    return contacts;
  }


  export function addContact(contact){
      // const contacts = getContacts()
      // const contactArray = [...contacts, contact]
      // localStorage.setItem('contacts', JSON.stringify(contactArray))
      fire.database().ref().child(`contacts/${contact.id}`).set(  
        contact,  
        err => {  
          if (err)  
            console.log(err);
          }
        );
  }
  
  export function removeContact(id){
    // const contacts = getContacts();
    // const newContactArray = contacts.filter(x => {
    //   return x.id !== id;
    // });
    // localStorage.setItem('contacts', JSON.stringify(newContactArray))
    // return newContactArray;
    fire.database().ref().child(`contacts/${id}`).remove(  
      err => {  
        if (err)  
          console.log(err);
      });
    return getContacts();  
  }

  export function editContact(contact){
    // const contacts = getContacts()
    // contacts.filter((x) => x.id === contact.id)[0].name = contact.name;
    // contacts.filter((x) => x.id === contact.id)[0].phone = contact.phone;
    // contacts.filter((x) => x.id === contact.id)[0].email = contact.email;
    // localStorage.setItem('contacts', JSON.stringify(contacts));
    fire.database().ref().child(`contacts/${contact.id}`).set(  
      contact,  
      err => {  
        if (err)  
          console.log(err);
        }
      );
  }
