//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: "Welcome to the Summoner’s Rift",
    icon: "",
    nickname: "titus",
    img: "../img/1.png",
    nickname: '绿衣吹笛人 30 LV'
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../legends/legends'
  //   })
  // },
  bindFreeLegendTap: function () {
    wx.navigateTo({
      url: '../legends/legends'
    })
  },
  bindBattleListTap: function () {
    wx.navigateTo({
      url: '../battles/battles'
    })
  },
  onLoad: function () {
  }
})
