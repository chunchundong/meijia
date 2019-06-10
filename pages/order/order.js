// pages/order/order.js
// pages/people/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peopleIndex: 0,
    dataIndex: "2019-5-31",
    timeIndex: "14:45",
    toastShow: 'true',
    peoples: [
      "张三,高级技师,18434260819",
      "李四,高级技师,18434260819",
      "王五,初级技师,18434260819",
      "赵六,初级技师,18434260819",
      "田七,高级技师,18434260819",
    ]
    // peoples: [
    //   {
    //     "name": "张三",
    //     "feature": "高级技师",
    //     "phone": "18434260819"
    //   },
    //   {
    //     "name": "李四",
    //     "feature": "高级技师",
    //     "phone": "18434260819"
    //   },
    //   {
    //     "name": "王五",
    //     "feature": "初级技师",
    //     "phone": "18434260819"
    //   },
    //   {
    //     "name": "赵六",
    //     "feature": "初级技师",
    //     "phone": "18434260819"
    //   },
    //   {
    //     "name": "田七",
    //     "feature": "普通",
    //     "phone": "18434260819"
    //   },
    // ],

  },
  //选择技师
  bindPeopleChange: function (res) {
    this.setData({
      peopleIndex: res.detail.value
    })
  },
  //选择日期
  bindDataChange: function (res) {
    this.setData({
      dataIndex: res.detail.value
    })
  },
  //选择时间
  bindTimeChange: function (res) {
    this.setData({
      timeIndex: res.detail.value
    })
  },
  //预约
  order: function () {
    var that = this;
    this.setData({
      toastShow: ''
    })
    setTimeout(function () {
      that.setData({
        toastShow: 'true'
      })
    }, 2000)
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