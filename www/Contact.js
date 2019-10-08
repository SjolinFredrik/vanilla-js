class Contacts extends App {
  constructor() {
    super()
    this.addedContacts()
  }
  addedContacts() {
    let div = document.createElement('div')
    let body = document.querySelector('body')
    body.append(div)
  }
}
