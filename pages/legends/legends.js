//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items:[],
    banners: [{
        img: "../img/2.png",
        nickname: '1.Braum 布隆 弗雷尔卓德之心 Support'
      },{
          img: "../img/3.png",
          nickname: '2.Chogath 科加斯 虚空恐惧 Tank'
        },{
            img: "../img/4.png",
            nickname: '3.Fiora 菲奥娜 无双剑姬 Fighter'
          },{
              img: "../img/5.png",
              nickname: '4.Fizz 菲兹 潮汐海灵 Assassin'
            },{
                img: "../img/6.png",
                nickname: '5.Graves 格雷福斯 法外狂徒 Markman'
              },{
                  img: "../img/7.png",
                  nickname: '6.Jhin 烬 戏命师 Markman'
                },{
                    img: "../img/8.png",
                    nickname: '7.Lulu 璐璐 仙灵女巫 Support'
                  },{
                      img: "../img/9.png",
                      nickname: '8.Morgana 莫甘娜 堕落天使 Mage'
                    },{
                        img: "../img/10.png",
                        nickname: '9.Nasus 内瑟斯 沙漠死神 Fighter'
                      },{
                          img: "../img/11.png",
                          nickname: '10.Zed 劫 影流之主 Assassin'
                        }
    ],
  },
  // onLoad: function () {
  //   // 加载时更新数据域
  //   this.getFreeLegendData()
  // },
  //
  // getFreeLegendData: function () {
  //   var _this = this;
  //   wx.request({
  //     url: "http://lolapi.games-cube.com/Free",
  //     data: {
  //       qquin: "U14762379253352991681",
  //       vaid: 17,
  //     },
  //     header: {
  //       'DAIWAN-API-TOKEN': app.getAccessToken(),
  //     },
  //     success: function (res) {
  //       var temLegends = [];
  //       for (var i in res.data['data'][0]) {
  //           temLegends.push(res.data['data'][0][i])
  //       }
  //       wx.setStorageSync('temLegends', temLegends)
  //       console.log(wx.getStorageSync('temLegends'))
  //
  //       _this.setData(
  //         {
  //           legends: wx.getStorageSync('temLegends'),
  //         }
  //       )
  //     },
  //     fail: function () {
  //       _this.showError();
  //     }
  //   })
  // }
})
