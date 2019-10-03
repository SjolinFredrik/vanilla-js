// Body element for the whole site
let body = document.querySelector('body')

// Site Header
let header = document.createElement('header')
header.innerHTML = 'Hello, I love Phoney!'
body.append(header)

// Div to hold input fields
let div = document.createElement('div')
div.setAttribute('class', 'input-holder')
body.append(div)

let nameInput = document.createElement('input')
nameInput.setAttribute('class', 'insert-name')
nameInput.setAttribute('placeholder', 'Ange namn:')
div.append(nameInput)

let mailInput = document.createElement('input')
mailInput.setAttribute('class', 'insert-mail')
mailInput.setAttribute('placeholder', 'Ange mail:')
div.append(mailInput)

let telephoneInput = document.createElement('input')
telephoneInput.setAttribute('class', 'insert-number')
telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
div.append(telephoneInput)
