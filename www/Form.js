class Form extends App {
  constructor() {
    super()
    this.addForm()
  }
  addForm() {
    // Body element for the whole site
    let body = document.querySelector('body')

    // Site Header
    let header = document.createElement('header')
    header.innerHTML = 'Hello, I love Phoney!'
    body.append(header)

    // Div to hold input fields
    let inputDiv = document.createElement('div')
    inputDiv.setAttribute('class', 'input-holder')
    body.append(inputDiv)

    // Input to insert name
    let nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('class', 'add-name')
    nameInput.setAttribute('autofocus', '')
    nameInput.setAttribute('value', '')
    nameInput.setAttribute('placeholder', 'Ange namn:')
    nameInput.setAttribute('id', 'name')
    inputDiv.append(nameInput)

    // Input for mail
    let mailInput = document.createElement('input')
    mailInput.setAttribute('type', 'text')
    mailInput.setAttribute('class', 'add-mail')
    mailInput.setAttribute('value', '')
    mailInput.setAttribute('placeholder', 'Ange mail:')
    mailInput.setAttribute('id', 'email')
    inputDiv.append(mailInput)

    // input for telephone number
    let telephoneInput = document.createElement('input')
    telephoneInput.setAttribute('type', 'text')
    telephoneInput.setAttribute('class', 'add-number')
    telephoneInput.setAttribute('value', '')
    telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
    telephoneInput.setAttribute('id', 'telephone')
    inputDiv.append(telephoneInput)

    // Div for delete / add buttons
    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('class', 'button-holder')
    body.append(buttonDiv)

    // Button to save the contacts insertet valuse
    let submit = document.createElement('button')
    submit.setAttribute('class', 'saved-user')
    submit.setAttribute('id', 'save-contact')
    submit.innerHTML = 'Lägg till mig!'
    buttonDiv.append(submit)

    // Button to remove contact from phonebook
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'remove-user')
    deleteButton.innerHTML = 'Radera mig!'
    buttonDiv.append(deleteButton)
  }
}
