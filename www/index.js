// Create an User "class" using Object.create
const contactsPrototype = {
  // put methods and fields that have a default value
  // in the prototype
  getInput() {
    // Add an event listener to window
    // the whole browser window
    window.addEventListener('click', e => {
      // Listener for the submit button
      // and for saving the inputs value
      if (e.target.closest('.save-user')) {
        let inputValues = document.querySelectorAll('input[value =""]')
        const data = [].reduce.call(
          inputValues,
          (acc, cur) => {
            acc[cur.id] = cur.value
            return acc
          },
          {}
        )

        this.store.save(data)

        // store.save = function() {
        // localStorage.setItem('contacts', JSON.stringify(data))
        // }
      }
      // savedValue.forEach(val => {
      //   let value = val.value
      //   console.log(value)
      // })

      // Listener for the delete button
      if (e.target.closest('.remove-user')) {
        console.log('User removed!')
      }
    })
  },
  saveContactToLocalStorage() {
    try {
      store = JSON.parse(localStorage.store)
    } catch (e) {
      store = {}
    }
    store.save = function() {
      localStorage.store = JSON.stringify(this)
    }
  }
}

function Contact() {
  // make a new instance/object with
  // userPrototype as its prototype
  let newInstance = Object.create(contactsPrototype)
  // fields that are different for each instance
  // need only be assigned here
  return newInstance
}

let user = new Contact()
contactsPrototype.getInput()
contactsPrototype.saveContactToLocalStorage()
