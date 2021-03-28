const Room = require('../../model/room')
const Game = require('../../model/game')
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {

  },

  onLoad() {
    this.test()
  },

  test() {
    const GameCol = db.collection('Game')
    GameCol.limit(1).get().then(ret => {
      console.log(ret)
      const game = new Game(ret.data[0])
      console.log({ game })
    })
  }
})
