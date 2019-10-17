class App {
  constructor() {}

  createDOM() {
    this.listen()
    this.form = new Form()
    this.contacts = new Contacts()
  }

  listen() {
    window.addEventListener('click', e => {
      // Save new contact
      if (e.target.closest('#save-contact')) this.saveContact()
      // Add more mail
      if (e.target.closest('#add-more-email')) this.addNewEmail()
      // Add more phones
      if (e.target.closest('#add-more-phone')) this.addNewPhone()
      // Button to save changes made to a single contact
      if (e.target.closest('#update-contact'))
        this.saveNewUpdates(e.target.getAttribute('data'))

      // Button to edit a contact
      if (e.target.closest('.edit-contact'))
        this.editContact(e.target.getAttribute('data'))

      // Button to reset / change between different users
      if (e.target.closest('.reset-button'))
        this.resetContact(
          e.target.getAttribute('data-id'),
          e.target.getAttribute('data-index')
        )

      // button to cancel ongoing editation
      if (e.target.closest('.cancel-edit'))
        this.editContact(e.target.getAttribute('data'))

      // Button to delete a contact
      if (e.target.closest('.delete-contact'))
        this.deleteContact(e.target.getAttribute('data'))

      // Button to create contact form so u can edit it
      if (e.target.closest('.update-button'))
        this.updateContact(e.target.getAttribute('data'))

      // Go back to main page from contact page
      if (e.target.closest('.go-back'))
        this.takeMeBack(e.target.getAttribute('data'))
    })
  }

  takeMeBack() {
    document.querySelector('div.contact').outerHTML = ''
    document.querySelector('div.history').outerHTML = ''
    this.form = new Form()
    this.contacts = new Contacts()
  }
  resetContact(id, index) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id)
    })

    let resetPoint = contact.history.splice(index, 1)[0]
    console.log(resetPoint)

    contact.history.push(resetPoint)
    contacts.save()

    document.querySelector('div.contact').outerHTML = ''
    document.querySelector('div.history').outerHTML = ''
    this.contact = new Contact(id)
  }
  saveContact() {
    let nameValue = document.querySelector('input#name').value
    let emailValue = document.querySelector('div.email-div').children
    let phoneValue = document.querySelector('div.phone-div').children

    let emailFilter = [].filter
      .call(emailValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })

    let phoneFilter = [].filter
      .call(phoneValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })

    const contact = {
      id: Date.now(),
      history: [
        {
          name: nameValue,
          email: emailFilter,
          phone: phoneFilter
        }
      ]
    }

    contacts.push(contact)
    contacts.save()
    document.querySelector('div.form-div').outerHTML = ''
    this.form = new Form()
    document.querySelector('div.table-div').outerHTML = ''
    this.contacts = new Contacts()
  }

  // Edit a contacts number and email
  editContact(id) {
    document.querySelector('div.form-div').outerHTML = ''
    document.querySelector('div.table-div').outerHTML = ''
    this.contact = new Contact(id)
  }
  // Delete excisting contact
  deleteContact(id) {
    contacts.splice(contacts.findIndex(contact => contact.id === Number(id)), 1)
    contacts.save()
    document.querySelector('div.table-div').outerHTML = ''
    this.contacts = new Contacts()
  }

  // Add new input for more emails
  addNewEmail() {
    let newEmail = document.querySelector('div.email-div')
    let input = document.createElement('input')
    input.setAttribute('placeholder', 'Ange mail:')
    newEmail.append(input)
  }

  // Add new input for more phone numbers
  addNewPhone() {
    let newPhone = document.querySelector('div.phone-div')
    let input = document.createElement('input')
    input.setAttribute('placeholder', 'Ange telefon nr:')
    newPhone.append(input)
  }

  // Update excisting contact create new form
  updateContact(data) {
    document.querySelector('div.history').outerHTML = ''
    this.contactForm = new ContactForm().updateForm(data)
  }

  // Save changes to you contact
  saveNewUpdates(id) {
    let contact = contacts.find(contact => contact.id === Number(id))
    // console.log(contact)

    let nameValue = document.querySelector('input#name').value
    let emailValue = document.querySelector('div.email-div').children
    let phoneValue = document.querySelector('div.phone-div').children

    let emailFilter = [].filter
      .call(emailValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })

    let phoneFilter = [].filter
      .call(phoneValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })

    let newContact = {
      name: nameValue,
      email: emailFilter,
      phone: phoneFilter
    }
    contact.history.push(newContact)
    console.log(newContact)
    console.log(contact)
    contacts.save()

    this.editContact(id)
  }
}
