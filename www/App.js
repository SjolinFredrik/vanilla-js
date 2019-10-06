class App {
  constructor() {}

  createDOM() {
    this.listen()
    this.form = new Form()
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.closest('#save-contact')) this.saveContact()
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
    this.saveContactToLocalStorage(data)
  }
  // Save multiple contacts to localStorage
  saveContactToLocalStorage(data) {
    // look after the key contacts if it excist
    // if it finds it it will push in the new data to it
    // if not, the catch will pick it up and create it
    // so no error will occure
    try {
      const contacts = JSON.parse(localStorage.contacts)
      console.log(contacts)
      contacts.push(data)
      localStorage.setItem('contacts', JSON.stringify(contacts))
      console.log('try')
    } catch (e) {
      localStorage.setItem('contacts', JSON.stringify([data]))
      console.log('catch')
    }
  }
}
