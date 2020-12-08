import { makeAutoObservable } from "mobx"

class TestStore {
  email = ""
  phone = ""
  sub = ""

  setUser(data) {
    this.email = data.email
    this.phone = data.phone_number
    this.sub = data.sub
  }

  updateEmail(newEmail) {
    this.email = newEmail
  }

  updatePhone(newEmail) {
    this.phone = newEmail
  }

  resetUser() {
    this.email = ""
    this.phone = ""
    this.sub = ""
  }

  constructor(value) {
    makeAutoObservable(this)
  }
}

const store = new TestStore()
export default store
