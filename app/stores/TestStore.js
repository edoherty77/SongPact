import { makeAutoObservable } from "mobx"

class TestStore {
  value = 0
  increase() {
    this.value++
  }
  decrease() {
    this.value > 0 ? this.value-- : (this.value = 0)
  }
  get oddOrEven() {
    return this.value % 2 === 0 ? "even" : "odd"
  }

  constructor(value) {
    makeAutoObservable(this)
  }
}

const store = new TestStore()
export default store
