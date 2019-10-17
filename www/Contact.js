class Contact extends App {
  constructor(id) {
    super()
    this.id = id
    this.addedContact()
    this.contactHistory()
  }
  // get a specific id for each contact from contacts list
  addedContact() {
    let contact = contacts.find(contact => {
      return contact.id === Number(this.id)
    })
    const latestVersion = [...contact.history].pop(-1)
    console.log(contact)

    // The excisting contact information
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div contact')
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
    thFour.innerText = ''

    tr.append(th)
    tr.append(thTwo)
    tr.append(thThree)
    tr.append(thFour)
    thead.append(tr)
    table.append(thead)
    tableDiv.append(table)

    let tbody = document.createElement('tbody')

    let tr2 = document.createElement('tr')

    let td = document.createElement('td')
    td.innerText = latestVersion.name
    console.log(contact.history)

    let tdTwo = document.createElement('td')
    tdTwo.innerText = latestVersion.email.join('\n')

    let tdThree = document.createElement('td')
    tdThree.innerText = latestVersion.phone.join('\n')

    let updateButton = document.createElement('button')
    updateButton.setAttribute('class', 'update-button')
    updateButton.setAttribute('data', contact.id)
    updateButton.innerText = 'Editera'

    tr2.append(td)
    tr2.append(tdTwo)
    tr2.append(tdThree)
    tr2.append(updateButton)
    tbody.append(tr2)
    table.append(tbody)
  }
  contactHistory() {
    let contact = contacts.find(contact => {
      return contact.id === Number(this.id)
    })
    console.log(contact)

    // The excisting contact information
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div history')
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

    tr.append(th)
    tr.append(thTwo)
    tr.append(thThree)
    tr.append(thFour)

    thead.append(tr)
    table.append(thead)
    tableDiv.append(table)

    let tbody = document.createElement('tbody')
    contact.history.forEach((contactVersion, i) => {
      let tr2 = document.createElement('tr')

      let td = document.createElement('td')
      td.innerText = contactVersion.name

      let tdTwo = document.createElement('td')
      tdTwo.innerText = contactVersion.email.join('\n')

      let tdThree = document.createElement('td')
      tdThree.innerText = contactVersion.phone.join('\n')

      let tdFour = document.createElement('td')

      let resetButton = document.createElement('button')
      resetButton.setAttribute('class', 'reset-button')
      resetButton.setAttribute('data-index', i)
      resetButton.setAttribute('data-id', this.id)

      resetButton.innerText = 'Återställ'
      tdFour.append(resetButton)

      tr2.append(td)
      tr2.append(tdTwo)
      tr2.append(tdThree)
      tr2.append(tdFour)
      tbody.append(tr2)
    })
    table.append(tbody)
  }
}
