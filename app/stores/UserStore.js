import { makeAutoObservable } from 'mobx'

class UserStore {
  id = ''
  firstName = ''
  lastName = ''
  artistName = ''
  companyName = ''
  email = ''

  setUser(values) {
    console.log('setting User in UserStore...')
    this.firstName = values.firstName
    this.lastName = values.lastName
    this.artistName = values.artistName
    this.companyName = values.companyName
    this.email = values.email
    console.log(this.firstName, this.lastName, ' set')
  }

  resetUser() {
    console.log('resetting User in UserStore...')
    this.firstName = ''
    this.lastName = ''
    this.artistName = ''
    this.companyName = ''
    this.email = ''
    console.log('User reset')
  }

  constructor() {
    makeAutoObservable(this)
  }
}

const store = new UserStore()
export default store
