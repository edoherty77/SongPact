import { makeAutoObservable } from "mobx"

class SignUpStore {
  firstName = ""
  lastName = ""
  email = ""
  password = ""
  address = ""
  city = ""
  state = ""
  zipCode = ""
  artistName = ""
  companyName = ""

  setUserInfo(values) {
    console.log("storing first SignUp screen")
    console.log(values)
    this.firstName = values.firstName
    this.lastName = values.lastName
    this.email = values.email
    this.password = values.password
  }

  setAddress(values) {
    console.log("storing second SignUp screen")
    console.log(values)
    this.address = values.address
    this.city = values.city
    this.state = values.state
    this.zipCode = values.zipCode
  }

  setArtistCompany(values) {
    console.log("storing last SignUp screen")
    console.log(values)
    this.artistName = values.artistName
    this.companyName = values.companyName
  }

  resetSignUp() {
    this.firstName = ""
    this.lastName = ""
    this.email = ""
    this.password = ""
    this.address = ""
    this.city = ""
    this.state = ""
    this.zipCode = ""
    this.artistName = ""
    this.companyName = ""
  }
}

const store = new SignUpStore()
export default store
