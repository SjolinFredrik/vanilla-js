class App {
  constructor() {}

  createDOM() {
    this.listen()
    this.form = new Form()
    this.contacts = new Contacts()
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.closest('#save-contact')) this.saveContact()
      if (e.target.closest('#add-more-email')) this.addNewEmail()
      if (e.target.closest('#add-more-phone')) this.addNewPhone()
    })
  }
  //
  saveContact() {
    // let inputValues = document.querySelectorAll('input[type="text"]')
    let nameValue = document.querySelector('input#name').value
    let phoneValue = document.querySelector('div.email-div').children
    let emailValue = document.querySelector('div.phone-div').children

    let phoneFilter = [].filter
      .call(phoneValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })

    let emailFilter = [].filter
      .call(emailValue, html => {
        return html.tagName === 'INPUT'
      })
      .map(input => {
        return input.value
      })
    console.log(nameValue)
    console.log(phoneFilter)
    console.log(emailFilter)

    const data = {
      name: nameValue,
      phone: phoneFilter,
      email: emailFilter
    }
    // const data = [].reduce.call(
    //   inputValues,
    //   (acc, cur) => {
    //     acc[cur.id] = cur.value
    //     return acc
    //   },
    //   {}
    // )
    contacts.push(data)
    contacts.forEach((item, i) => {
      item.id = i + 1
    })
    console.log(data)
    contacts.save(data)
    document.querySelector('div.form-div').outerHTML = ''
    this.form = new Form()
    document.querySelector('div.table-div').outerHTML = ''
    this.contacts = new Contacts()
  }

  // Add new input for more phone numbers
  addNewPhone() {
    const newPhone = document.querySelector('div.phone-div')
    const input = document.createElement('input')
    newPhone.append(input)
  }
  // Add new input for more emails
  addNewEmail() {
    const newEmail = document.querySelector('div.email-div')
    const input = document.createElement('input')
    newEmail.append(input)
  }
}
