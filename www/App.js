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
    contacts.push(data)
    console.log(data)
    contacts.save(data)
  }
}
