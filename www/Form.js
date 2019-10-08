class Form extends App {
  constructor() {
    super()
    this.addForm()
  }
  addForm() {
    let div = document.createElement('div')
    let body = document.querySelector('body')
    body.append(div)
    // // Site Header
    // let header = document.createElement('header')
    // header.setAttribute('class', 'my-header')
    // header.innerHTML = 'Phoney - phonebook'
    // body.append(header)

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
    let mailInput = document.createElement('input')
    mailInput.setAttribute('type', 'text')
    mailInput.setAttribute('class', 'add-mail')
    mailInput.setAttribute('value', '')
    mailInput.setAttribute('placeholder', 'Ange mail:')
    mailInput.setAttribute('id', 'email')
    div.append(mailInput)

    // input for telephone number
    let telephoneInput = document.createElement('input')
    telephoneInput.setAttribute('type', 'text')
    telephoneInput.setAttribute('class', 'add-number')
    telephoneInput.setAttribute('value', '')
    telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
    telephoneInput.setAttribute('id', 'telephone')
    div.append(telephoneInput)

    // button to add more emails
    let addEmail = document.createElement('button')
    addEmail.setAttribute('class', 'add-more')
    addEmail.setAttribute('id', 'add-more-email')
    addEmail.innerHTML = '+'
    div.append(addEmail)

    // button to add more telephone number
    let addTelephoneNumber = document.createElement('button')
    addTelephoneNumber.setAttribute('class', 'add-more')
    addTelephoneNumber.setAttribute('id', 'add-telephone-number')
    addTelephoneNumber.innerHTML = '+'
    div.append(addTelephoneNumber)

    // Button to save the contacts insertet valuse
    let submit = document.createElement('button')
    submit.setAttribute('class', 'saved-user')
    submit.setAttribute('id', 'save-contact')
    submit.innerHTML = 'Lägg till mig!'
    div.append(submit)

    // Button to remove contact from phonebook
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'remove-user')
    deleteButton.innerHTML = 'Radera mig!'
    div.append(deleteButton)
  }
}
