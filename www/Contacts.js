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

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')

    let th = document.createElement('th')
    th.innerText = 'Namn'

    let thTwo = document.createElement('th')
    thTwo.innerText = 'E-post'

    let thThree = document.createElement('th')
    thThree.innerText = 'Telefon'

    let thFour = document.createElement('th')
    thFour.innerText = 'Editera'

    tr.append(th)
    tr.append(thTwo)
    tr.append(thThree)
    tr.append(thFour)
    thead.append(tr)
    table.append(thead)

    let tbody = document.createElement('tbody')
    contacts.forEach(contact => {
      let tr = document.createElement('tr')

      let td = document.createElement('td')
      td.innerText = contact.name

      let tdTwo = document.createElement('td')
      tdTwo.innerText = contact.email.join('\n')

      let tdThree = document.createElement('td')
      tdThree.innerText = contact.phone.join('\n')

      let tdFour = document.createElement('td')
      let editButton = document.createElement('button')
      editButton.setAttribute('class', 'edit-contact')
      editButton.setAttribute('data', contact.id)
      editButton.innerText = 'Editera'
      thFour.innerText = 'Editera'

      let tdFive = document.createElement('td')
      let deleteButton = document.createElement('button')
      deleteButton.setAttribute('class', 'delete-contact')
      deleteButton.setAttribute('data', contact.id)
      deleteButton.innerText = 'Radera'

      tr.append(td)
      tr.append(tdThree)
      tr.append(tdTwo)
      tr.append(tdFour)
      tr.append(tdFive)
      tbody.append(tr)
      tdFour.append(editButton)
      tdFive.append(deleteButton)
    })
    table.append(tbody)
    tableDiv.append(table)
  }
}
