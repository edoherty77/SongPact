import { makeAutoObservable } from "mobx"

class UserStore {
  firstName = ""
  lastName = ""
  artistName = ""
  companyName = ""
  email = ""

  setUser(values) {
    this.firstName = values.firstName
    this.lastName = values.lastName
    this.artistName = values.artistName
    this.companyName = values.companyName
    this.email = values.email
  }

  clearUser() {
    this.firstName = ""
    this.lastName = ""
    this.artistName = ""
    this.companyName = ""
    this.email = ""
  }

  constructor() {
    makeAutoObservable(this)
  }
}

const store = new UserStore()
export default store
