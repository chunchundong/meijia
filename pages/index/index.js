//index.js
//获取应用实例
const app = getApp()
var fileDatas = require('../../utils/data.js');
Page({
  data: {
    imgUrls: fileDatas.bannerImageUrl(),
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navLists: fileDatas.navLists(),
    clickNav: 0,
    colorIndex: 0,
    colors: ['pink', 'orange', 'yellow', 'green', 'purple'],
    contentLists: fileDatas.contentLists()
  },
  // 实现页面字体颜色切换
  changeNav: function(res){
    this.setData({
      clickNav : res.currentTarget.dataset.item,
      colorIndex : res.currentTarget.dataset.index,
    })
  },
  // 下拉加载更多
  loadMore: function(res){
    //得到导航下标
    var clickNav = this.data.clickNav;
    if (this.data.contentLists[clickNav] == 0){
      return
    }else{
      wx.showToast({
        title: '加载中...',
        icon: 'loading'
      })
      var that = this;
      that.data.contentLists[clickNav] = that.data.contentLists[clickNav].concat(that.data.contentLists[clickNav]);
      that.setData({
        contentLists: that.data.contentLists
      })
    }

  },
  // 点击跳转到详情页
  toDetail: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
    wx.setNavigationBarTitle({
      title: '详情'
    })
  },
  //点击跳转到预约界面
  order:function(){
    wx:wx.navigateTo({
      url: '../order/order',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (res) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000
    })
  }
})
