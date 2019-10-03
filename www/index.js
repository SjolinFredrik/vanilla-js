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
nameInput.setAttribute('class', 'add-name')
nameInput.setAttribute('autofocus', '')
nameInput.setAttribute('value', '')
nameInput.setAttribute('placeholder', 'Ange namn:')
inputDiv.append(nameInput)

// Input for mail
let mailInput = document.createElement('input')
mailInput.setAttribute('class', 'add-mail')
mailInput.setAttribute('value', '')
mailInput.setAttribute('placeholder', 'Ange mail:')
inputDiv.append(mailInput)

// input for telephone number
let telephoneInput = document.createElement('input')
telephoneInput.setAttribute('class', 'add-number')
telephoneInput.setAttribute('value', '')
telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
inputDiv.append(telephoneInput)

// Div for delete / add buttons
let buttonDiv = document.createElement('div')
buttonDiv.setAttribute('class', 'button-holder')
body.append(buttonDiv)

// Button to save the contacts insertet valuse
let submit = document.createElement('button')
submit.setAttribute('class', 'save-user')
submit.innerHTML = 'Lägg till mig!'
buttonDiv.append(submit)

// Button to remove contact from phonebook
let deleteButton = document.createElement('button')
deleteButton.setAttribute('class', 'remove-user')
deleteButton.innerHTML = 'Radera mig!'
buttonDiv.append(deleteButton)

// Create an User "class" using Object.create
const userPrototype = {
  // put methods and fields that have a default value
  // in the prototype
  getInput() {
    // Add an event listener to window
    // the whole browser window
    window.addEventListener('click', e => {
      // Listener for the submit button
      if (e.target.closest('.save-user')) {
        let savedValue = document.querySelectorAll('input[value =""]')
        savedValue.forEach(val => {
          let value = val.value
          console.log(value)
        })
      }
      // Listener for the delete button
      if (e.target.closest('.remove-user')) {
        console.log('User removed!')
      }
    })
  }
}

function User(name, email, phoneNumber) {
  this.name = name
  this.email = []
  this.phoneNumber = []
  // make a new instance/object with
  // userPrototype as its prototype
  let newInstance = Object.create(userPrototype)
  // fields that are different for each instance
  // need only be assigned here
  userPrototype.User.name = function() {
    return newInstance
  }
  // newInstance.name = name
  // newInstance.email = email
  // newInstance.phoneNumber = phoneNumber
}

let user = new User()
userPrototype.getInput()
