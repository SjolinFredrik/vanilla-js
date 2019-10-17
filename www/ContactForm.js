class ContactForm extends App {
  constructor() {
    super()
  }
  updateForm(id) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id)
    })

    const latestVersion = [...contact.history].pop(-1)

    let div = document.createElement('div')
    div.setAttribute('class', 'form-div')
    let body = document.querySelector('body')
    body.append(div)

    // Site Header
    let header = document.createElement('header')
    header.setAttribute('class', 'header')
    header.innerHTML = 'Ändra dina uppgifter'
    div.append(header)

    // Input for name
    let nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('class', 'add-name')
    nameInput.setAttribute('autofocus', '')
    nameInput.setAttribute('value', latestVersion.name)
    nameInput.setAttribute('id', 'name')
    div.append(nameInput)

    // Input for mail
    const emailDiv = document.createElement('div')
    emailDiv.setAttribute('class', 'email-div')
    latestVersion.email.forEach(email => {
      let mailInput = document.createElement('input')
      mailInput.setAttribute('type', 'text')
      mailInput.setAttribute('class', 'add-mail')
      mailInput.setAttribute('value', email)
      emailDiv.append(mailInput)
      div.append(emailDiv)
    })

    // button to add more emails
    let addEmail = document.createElement('button')
    addEmail.setAttribute('class', 'add-more')
    addEmail.setAttribute('id', 'add-more-email')
    addEmail.innerHTML = '+'
    emailDiv.append(addEmail)

    // input for telephone number
    const phoneDiv = document.createElement('div')
    phoneDiv.setAttribute('class', 'phone-div')
    latestVersion.phone.forEach(phone => {
      let telephoneInput = document.createElement('input')
      telephoneInput.setAttribute('type', 'text')
      telephoneInput.setAttribute('class', 'add-number')
      telephoneInput.setAttribute('value', phone)
      phoneDiv.append(telephoneInput)
      div.append(phoneDiv)
    })

    // button to add more telephone number
    let addTelephoneNumber = document.createElement('button')
    addTelephoneNumber.setAttribute('class', 'add-more')
    addTelephoneNumber.setAttribute('id', 'add-more-phone')
    addTelephoneNumber.innerHTML = '+'
    phoneDiv.append(addTelephoneNumber)

    // button to update a contact
    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('class', 'button-div')
    let submit = document.createElement('button')
    submit.setAttribute('class', 'update-user')
    submit.setAttribute('id', 'update-contact')
    submit.setAttribute('data', contact.id)
    submit.innerHTML = 'Spara'

    // cancel button
    let cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'cancel-edit')
    cancelButton.setAttribute('data', contact.id)
    cancelButton.innerText = 'Avbryt'
    buttonDiv.append(submit)
    buttonDiv.append(cancelButton)
    div.append(buttonDiv)
  }
}
