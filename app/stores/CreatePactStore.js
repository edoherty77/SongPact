import { makeAutoObservable } from 'mobx'

class CreatePactStore {
  type = 'Producer'
  collorators = []
  recordTitle = ''
  initBy = ''
  performers = [{ publisherPercent: '', userId: '', artistName: '' }]
  producer = {
    userId: '',
    artistName: '',
    advancePercent: '',
    publisherPercent: '',
    royaltyPercent: '',
    credit: '',
  }

  setCollabInfo(values) {
    const collabsArr = values.collabs
    // console.log('values', values.collabs)
    for (let i = 0; i < collabsArr.length; i++) {
      this.collorators.push(collabsArr[i])
    }
  }

  setProducer(values) {
    this.producer.userId = values
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
    this.collorators = []
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
