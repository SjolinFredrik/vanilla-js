class Form extends App {
  constructor() {
    super()
    this.addForm()
  }
  addForm() {
    let div = document.createElement('div')
    div.setAttribute('class', 'form-div')
    let body = document.querySelector('body')
    body.append(div)

    // Site Header
    let header = document.createElement('header')
    header.setAttribute('class', 'header')
    header.innerHTML = 'Phoney kontaktbok'
    div.append(header)

    // Input for name
    let nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('class', 'add-name')
    nameInput.setAttribute('autofocus', '')
    nameInput.setAttribute('value', '')
    nameInput.setAttribute('placeholder', 'Ange namn:')
    nameInput.setAttribute('id', 'name')
    div.append(nameInput)

    // Input for mail
    const emailDiv = document.createElement('div')
    emailDiv.setAttribute('class', 'email-div')
    let mailInput = document.createElement('input')
    mailInput.setAttribute('type', 'text')
    mailInput.setAttribute('class', 'add-mail')
    mailInput.setAttribute('value', '')
    mailInput.setAttribute('placeholder', 'Ange mail:')
    mailInput.setAttribute('id', 'email')
    emailDiv.append(mailInput)
    div.append(emailDiv)

    // button to add more emails
    let addEmail = document.createElement('button')
    addEmail.setAttribute('class', 'add-more')
    addEmail.setAttribute('id', 'add-more-email')
    addEmail.innerHTML = '+'
    emailDiv.append(addEmail)

    // input for telephone number
    const phoneDiv = document.createElement('div')
    phoneDiv.setAttribute('class', 'phone-div')
    let telephoneInput = document.createElement('input')
    telephoneInput.setAttribute('type', 'text')
    telephoneInput.setAttribute('class', 'add-number')
    telephoneInput.setAttribute('value', '')
    telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
    telephoneInput.setAttribute('id', 'telephone')
    phoneDiv.append(telephoneInput)
    div.append(phoneDiv)

    // button to add more telephone number
    let addTelephoneNumber = document.createElement('button')
    addTelephoneNumber.setAttribute('class', 'add-more')
    addTelephoneNumber.setAttribute('id', 'add-more-phone')
    addTelephoneNumber.innerHTML = '+'
    phoneDiv.append(addTelephoneNumber)

    // button to save the contacts insertet value
    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('class', 'button-div')
    let submit = document.createElement('button')
    submit.setAttribute('class', 'saved-user')
    submit.setAttribute('id', 'save-contact')
    submit.innerHTML = 'Lägg till mig!'
    buttonDiv.append(submit)
    div.append(buttonDiv)
  }
}
