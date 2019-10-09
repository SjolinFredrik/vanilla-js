class Contacts extends App {
  constructor() {
    super()
    this.addedContacts()
  }
  addedContacts() {
    let tableDiv = document.createElement('div')
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

    tr.append(th)
    tr.append(thTwo)
    tr.append(thThree)
    thead.append(tr)
    table.append(thead)

    let tbody = document.createElement('tbody')
    contacts.forEach(contact => {
      let tr = document.createElement('tr')

      let td = document.createElement('td')
      td.innerText = contact.name

      let tdTwo = document.createElement('tdTwo')
      tdTwo.innerText = contact.email

      let tdThree = document.createElement('tdThree')
      tdThree.innerText = contact.telephone

      tr.append(td)
      tr.append(tdTwo)
      tr.append(tdThree)
      tbody.append(tr)
    })
    table.append(tbody)
    tableDiv.append(table)
  }
}
