// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    currentTab: 0,
    current: 0,
    active: 1,
    shesuShow: false,
    shixinShow: false,
    menu:['报告日期','结息/余额','同名划转'],
    list:[
      {
        id:1,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司",
        su:'诉',
        shi:'失'
      },
      {
        id:2,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司",
        su:'诉',
        shi:'失'
      },
      {
        id:3,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:4,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:5,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:6,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:7,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司四川财务商务有限公司"
      },
      {
        id:8,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:9,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:10,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      }
    ],
    list2:[
      {
        id:1,
        mouth:"2013-12",
        money:"29873974.89",
        number:"34",
      },
      
      {
        id:2,
        mouth:"2013-12",
        money:"29873974.89",
        number:"34",
      },
      {
        id:3,
        mouth:"2013-12",
        money:"29873974.89",
        number:"34",
      },
      {
        id:4,
        mouth:"2013-12",
        money:"29873974.89",
        number:"34",
      },
    ]
  },

  suShow() {
    this.setData({ shesuShow: true });
  },

  suHide() {
    this.setData({ shesuShow: false });
  },
  shiShow() {
    this.setData({ shixinShow: true });
  },

  shiHide() {
    this.setData({ shixinShow: false });
  },

   //  tab切换逻辑
   swichMenu: function (e) {
    var that = this;
    if (this.data.current === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        current: e.target.dataset.current
      })
    }
  },

  bindChange: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current
    });

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


  //  tab切换逻辑
  swichNav: function (e) {
    // console.log(e)
    var that = this;
      that.setData({
        currentTab: e.currentTarget.dataset.current,
      });
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