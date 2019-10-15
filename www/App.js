class App {
  constructor() {}

  createDOM() {
    this.listen()
    this.form = new Form()
    this.contacts = new Contacts()
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.closest('#save-contact')) this.saveContact()

      if (e.target.closest('#add-more-email')) this.addNewEmail()

      if (e.target.closest('#add-more-phone')) this.addNewPhone()

      // if (e.target.closest('#update-contact'))
      if (e.target.closest('.edit-contact'))
        this.editContact(e.target.getAttribute('data'))

      if (e.target.closest('.delete-contact'))
        this.deleteContact(e.target.getAttribute('data'))

      if (e.target.closest('.update-button'))
        this.updateContact(e.target.getAttribute('data'))
    })
  }

  saveContact() {
    let nameValue = document.querySelector('input#name').value
    let emailValue = document.querySelector('div.phone-div').children
    let phoneValue = document.querySelector('div.email-div').children

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

    console.log(nameValue)
    console.log(emailFilter)
    console.log(phoneFilter)

    const data = {
      name: nameValue,
      email: emailFilter,
      phone: phoneFilter,
      id: Date.now(),
      history: []
    }

    console.log(data)
    contacts.push(data)
    contacts.save()
    document.querySelector('div.form-div').outerHTML = ''
    this.form = new Form()
    document.querySelector('div.table-div').outerHTML = ''
    this.contacts = new Contacts()
  }

  // Edit a contacts number and email
  editContact(data) {
    document.querySelector('div.form-div').outerHTML = ''
    document.querySelector('div.table-div').outerHTML = ''
    this.contact = new Contact().addedContact(data)
  }

  // Update excisting contact
  updateContact(data) {
    this.contactForm = new ContactForm().updateForm(data)
  }
  // Delete excisting contact
  deleteContact(id) {
    console.log(id)
    contacts.splice(contacts.findIndex(contact => contact.id === Number(id)), 1)
    console.log(contacts)
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
}
