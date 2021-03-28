class Room {
  name
  cn
  en

  constructor(payload) {
    this.name = payload.name
    this.cn = payload.cn
    this.en = payload.en
  }
}

module.exports = Room