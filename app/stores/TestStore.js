import { makeAutoObservable } from "mobx"

class TestStore {
  email = ""
  phone = ""
  sub = ""

  setUser(data) {
    console.log("setting user in store")
    this.email = data.email
    this.phone = data.phone_number
    this.sub = data.sub
    console.log("email: ", this.email)
    console.log("phone: ", this.phone)
    console.log("sub: ", this.sub)
  }

  updateEmail(newEmail) {
    this.email = newEmail
  }

  updatePhone(newEmail) {
    this.phone = newEmail
  }

  resetUser() {
    console.log("resetting store")
    this.email = ""
    this.phone = ""
    this.sub = ""
    console.log("store reset")
  }

  constructor(value) {
    makeAutoObservable(this)
  }
}

const store = new TestStore()
export default store
