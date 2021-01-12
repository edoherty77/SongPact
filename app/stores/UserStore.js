import { makeAutoObservable } from "mobx"

class UserStore {
  id = ""
  firstName = ""
  lastName = ""
  artistName = ""
  companyName = ""
  address = ""
  city = ""
  zipCode = ""
  state = ""
  email = ""
  pacts = []
  contacts = []

  setID(id) {
    console.log("storing authenticated user ID")
    this.id = id
  }

  setUser(values) {
    console.log("setting User in UserStore...")
    console.log(values)
    this.firstName = values.firstName
    this.lastName = values.lastName
    this.artistName = values.artistName
    this.companyName = values.companyName
    this.email = values.email
    this.pacts = values.pacts
    this.contacts = values.contacts
    console.log(this.firstName, this.lastName, " set")
  }

  resetUser() {
    console.log("resetting User in UserStore...")
    this.id = ""
    this.firstName = ""
    this.lastName = ""
    this.artistName = ""
    this.companyName = ""
    this.email = ""
    this.pacts = []
    this.contacts = []
    console.log("User reset")
  }

  constructor() {
    makeAutoObservable(this)
  }
}

const store = new UserStore()
export default store
