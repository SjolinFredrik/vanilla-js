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
    let inputValues = document.querySelectorAll('input[type="text"]')
    const data = [].reduce.call(
      inputValues,
      (acc, cur) => {
        acc[cur.id] = cur.value
        return acc
      },
      {}
    )
    contacts.push(data)
    console.log(data)
    contacts.save(data)
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
