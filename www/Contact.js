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

    // The excisting contact information
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div contact')
    let body = document.querySelector('body')
    body.append(tableDiv)

    // Current showing contact header
    let header = document.createElement('header')
    header.setAttribute('class', 'header')
    header.innerHTML = 'Din aktuella kontakt'
    tableDiv.append(header)

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')

    let thName = document.createElement('th')
    thName.setAttribute('class', 'th-style')
    thName.innerText = 'Namn'

    let thEmail = document.createElement('th')
    thEmail.setAttribute('class', 'th-style')
    thEmail.innerText = 'E-post'

    let thPhone = document.createElement('th')
    thPhone.setAttribute('class', 'th-style')
    thPhone.innerText = 'Telefon'

    tr.append(thName)
    tr.append(thEmail)
    tr.append(thPhone)
    thead.append(tr)
    table.append(thead)
    tableDiv.append(table)

    let tbody = document.createElement('tbody')

    let trData = document.createElement('tr')

    let tdName = document.createElement('td')
    tdName.innerText = latestVersion.name

    let tdEmail = document.createElement('td')
    tdEmail.innerText = latestVersion.email.join('\n')

    let tdPhone = document.createElement('td')
    tdPhone.innerText = latestVersion.phone.join('\n')

    let tdButtons = document.createElement('td')
    let updateButton = document.createElement('button')
    updateButton.setAttribute('class', 'update-button button-style')
    updateButton.setAttribute('data', this.id)
    updateButton.innerText = 'Editera'

    let goBackButton = document.createElement('button')
    goBackButton.setAttribute('class', 'go-back button-style')
    goBackButton.setAttribute('data', this.id)
    goBackButton.innerText = 'Gå tillbaka'

    trData.append(tdName)
    trData.append(tdEmail)
    trData.append(tdPhone)
    trData.append(tdButtons)
    tdButtons.append(updateButton)
    tdButtons.append(goBackButton)
    tbody.append(trData)
    table.append(tbody)
  }
  contactHistory() {
    let contact = contacts.find(contact => {
      return contact.id === Number(this.id)
    })

    // The excisting contact information
    let tableDiv = document.createElement('div')
    tableDiv.setAttribute('class', 'table-div history')
    let body = document.querySelector('body')
    body.append(tableDiv)

    // History over a contact
    let header = document.createElement('header')
    header.setAttribute('class', 'header')
    header.innerHTML = 'Kontakt historia'
    tableDiv.append(header)

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')

    let thName = document.createElement('th')
    thName.setAttribute('class', 'th-style')
    thName.innerText = 'Namn'

    let thEmail = document.createElement('th')
    thEmail.setAttribute('class', 'th-style')
    thEmail.innerText = 'E-post'

    let thPhone = document.createElement('th')
    thPhone.setAttribute('class', 'th-style')
    thPhone.innerText = 'Telefon'

    tr.append(thName)
    tr.append(thEmail)
    tr.append(thPhone)

    thead.append(tr)
    table.append(thead)
    tableDiv.append(table)

    let tbody = document.createElement('tbody')
    contact.history.forEach((contactVersion, i) => {
      let trData = document.createElement('tr')

      let tdName = document.createElement('td')
      tdName.innerText = contactVersion.name

      let tdEmail = document.createElement('td')
      tdEmail.innerText = contactVersion.email.join('\n')

      let tdPhone = document.createElement('td')
      tdPhone.innerText = contactVersion.phone.join('\n')

      let tdButtons = document.createElement('td')
      let resetButton = document.createElement('button')
      resetButton.setAttribute('class', 'reset-button button-style')
      resetButton.setAttribute('data-index', i)
      resetButton.setAttribute('data-id', this.id)

      resetButton.innerText = 'Välj till aktuell'
      tdButtons.append(resetButton)

      trData.append(tdName)
      trData.append(tdEmail)
      trData.append(tdPhone)
      trData.append(tdButtons)
      tbody.append(trData)
    })
    table.append(tbody)
  }
}
