// pages/peopleDetail/peopleDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceList:[
      {
        serviceName: "面部清洁",
        servicePrice: "￥200"
      },
      {
        serviceName: "面部清洁",
        servicePrice: "￥600"
      },
      {
        serviceName: "面部清洁",
        servicePrice: "￥900"
      },
      {
        serviceName: "面部清洁",
        servicePrice: "￥1200"
      },
      {
        serviceName: "面部清洁",
        servicePrice: "￥2000"
      }
    ]
  },
  //跳转到预约界面
  toOrder: function(){
    wx:wx.navigateTo({
      url: '../order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  }
})