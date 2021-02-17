import { makeAutoObservable } from 'mobx'

class CreatePactStore {
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
    console.log('vals', values)

    const collabsArr = values.collabs
    for (let i = 0; i < collabsArr.length; i++) {
      this.collaborators.push(collabsArr[i])
    }
    console.log('collabs', this.collaborators)
  }

  setProducer(values) {
    let foundProducer = this.collaborators.find(
      (x) => x.userId === values.producer,
    )

    this.producer.userId = foundProducer.userId
    this.producer.artistName = foundProducer.artistName
    this.producer.firstName = foundProducer.firstName
    this.producer.lasttName = foundProducer.lastName
  }

  setProducerInfo(values) {
    this.producer.advancePercent = parseInt(values.advancePercent)
    this.producer.royaltyPercent = parseInt(values.royaltyPercent)
    this.producer.publisherPercent = parseInt(values.publisherPercent)
    this.producer.credit = values.credit
    console.log(this.producer)
  }

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
