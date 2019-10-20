class Contacts extends App {
  constructor() {
    super()
    this.addedContacts()
  }

  addedContacts() {
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div')
    let body = document.querySelector('body')
    body.append(tableDiv)

    // Saved contacts header
    let header = document.createElement('header')
    header.setAttribute('class', 'header')
    header.innerHTML = 'Aktuella kontakter'
    tableDiv.append(header)

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')

    let thName = document.createElement('th')
    thName.setAttribute('class', 'th-style th-name')
    thName.innerText = 'Namn'

    let thEmail = document.createElement('th')
    thEmail.setAttribute('class', 'th-style th-email')
    thEmail.innerText = 'E-post'

    let thPhone = document.createElement('th')
    thPhone.setAttribute('class', 'th-style th-phone')
    thPhone.innerText = 'Telefon'

    let thButtons = document.createElement('th')
    thButtons.setAttribute('class', 'th-buttons')
    thButtons.innerText = ''

    tr.append(thName)
    tr.append(thEmail)
    tr.append(thPhone)
    thead.append(tr)
    table.append(thead)

    let tbody = document.createElement('tbody')
    contacts.forEach(contact => {
      let tr = document.createElement('tr')

      let tdName = document.createElement('td')
      tdName.innerText = contact.history[contact.pointer].name

      let tdEmail = document.createElement('td')
      tdEmail.innerText = contact.history[contact.pointer].email.join('\n')

      let tdPhone = document.createElement('td')
      tdPhone.innerText = contact.history[contact.pointer].phone.join('\n')

      let tdForButtons = document.createElement('td')
      let editButton = document.createElement('button')
      editButton.setAttribute('class', 'edit-contact button-style')
      editButton.setAttribute('data', contact.id)
      editButton.innerText = 'Visa'

      // let tdForButtons = document.createElement('td')
      let deleteButton = document.createElement('button')
      deleteButton.setAttribute('class', 'delete-contact button-style')
      deleteButton.setAttribute('data', contact.id)
      deleteButton.innerText = 'Radera'

      tr.append(tdName)
      tr.append(tdEmail)
      tr.append(tdPhone)
      tr.append(tdForButtons)
      tbody.append(tr)
      tdForButtons.append(editButton)
      tdForButtons.append(deleteButton)
    })
    table.append(tbody)
    tableDiv.append(table)
  }
}
