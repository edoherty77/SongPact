import { makeAutoObservable } from 'mobx'

import user from './UserStore'

class CreatePactStore {
  currentUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user.id,
    artistName: user.artistName,
  }

  type = 'Producer'
  collaborators = []
  recordTitle = ''
  initBy = ''
  performers = [{ publisherPercent: '', userId: '', artistName: '' }]
  producer = {
    firstName: '',
    lastName: '',
    userId: '',
    artistName: '',
    advancePercent: '',
    publisherPercent: '',
    royaltyPercent: '',
    credit: '',
  }

  setCollabInfo(values) {
    console.log('current', currentUser)
    console.log('collab array', values)
    const collabsArr = values.collabs
    for (let i = 0; i < collabsArr.length; i++) {
      this.collaborators.push(collabsArr[i])
    }
    // this.collaborators.push(this.currentUser)
  }

  setProducer(values) {
    console.log(values)
    // this.producer.userId = values.producer
    //   let producerIndex = this.collaborators
    //     .map((item) => item.userId)
    //     .indexOf(values.producer)

    //   let newProducer =
    //     ~producerIndex && this.collaborators.splice(producerIndex, 1)
    //   console.log(newProducer)
  }

  setProducerInfo(values) {
    this.producer.advancePercent = parseInt(values.advancePercent)
    this.producer.royaltyPercent = parseInt(values.royaltyPercent)
    this.producer.publisherPercent = parseInt(values.publisherPercent)
    this.producer.credit = values.credit
    // console.log(this.producer)
  }

  // setArtistCompany(values) {
  //   console.log('storing artist/company data')
  //   console.log(values)
  //   this.artistName = values.artistName
  //   this.companyName = values.companyName
  // }

  resetPact() {
    this.recordTitle = ''
    this.initBy = ''
    this.collaborators = []
    this.performers = [{ publisherPercent: '', userId: '', artistName: '' }]
    this.producer = {
      userId: '',
      artistName: '',
      advancePercent: '',
      publisherPercent: '',
      royaltyPercent: '',
      credit: '',
    }
  }
}

const store = new CreatePactStore()
export default store
