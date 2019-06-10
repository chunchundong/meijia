// pages/people/index.js
var fileDatas = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    breedIndex: 0,
    breedList: ["美发","美甲","美瞳","美睫"],
    peopleIndex: 0,
    peopleList: fileDatas.peopleList()
  },
  //选择技师类别
  bindPickerChange: function(res){
    this.setData({
      breedIndex: res.detail.value
    })
  },
  //跳转到技师详情页
  toPeopleDetail: function(){
    wx:wx.navigateTo({
      url: '../peopleDetail/peopleDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    if(options.from == 'menu'){
     
    }
    return {
      title: '转发测试',
      success: function (res) {
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res){
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
   
  }
})