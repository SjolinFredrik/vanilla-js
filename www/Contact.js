class Contact extends App {
  constructor() {
    super()
  }

  // get a specific id for each contact from contacts list
  addedContact(id) {
    console.log(typeof id)
    let contact = contacts.find(contact => {
      console.log(typeof contact.id)
      return contact.id === Number(id)
    })
    console.log(contact)
    // Re-create the form for each contact
    let div = document.createElement('div')
    div.setAttribute('class', 'form-div')
    let body = document.querySelector('body')
    body.append(div)

    // The excisting contact information
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div')
    // let body = document.querySelector('body')
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
    thFour.innerText = 'Uppdatera'

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
    td.innerText = contact.name

    let tdTwo = document.createElement('td')
    tdTwo.innerText = contact.email

    let tdThree = document.createElement('td')
    tdThree.innerText = contact.phone

    let updateButton = document.createElement('button')
    updateButton.setAttribute('class', 'update-button')
    updateButton.setAttribute('data', contact.id)
    updateButton.innerText = 'Uppdatera'

    tr2.append(td)
    tr2.append(tdThree)
    tr2.append(tdTwo)
    tr2.append(updateButton)
    tbody.append(tr2)
    table.append(tbody)
  }
}
