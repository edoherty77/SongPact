import { makeObservable, observable, action, makeAutoObservable } from "mobx"
import "react-native-get-random-values"
import { v4 } from "uuid"

class User {
  constructor({ firstName, lastName, artistName, companyName, email }) {
    makeAutoObservable(this)
    this.id = v4()
    this.firstName = firstName
    this.lastName = lastName
    this.artistName = artistName
    this.companyName = companyName
    this.email = email
  }
}

export default User
