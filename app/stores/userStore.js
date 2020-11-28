import { makeAutoObservable } from "mobx"

class UserStore {
  users = []

  constructor(users) {
    makeAutoObservable(this)
    this.users = users
  }
}
