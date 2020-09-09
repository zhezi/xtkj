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
    list:[
      {
        id:1,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司",
      },
      {
        id:2,
        number:"34",
        money:"29873974.89",
        companyName:"北京京城电源有限公司有限公司",
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
        companyName:"四川财务商务有限公司"
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
      },
      {
        id:11,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:12,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:13,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:14,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:15,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:16,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:17,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:18,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:19,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      },
      {
        id:20,
        number:"34",
        money:"29873974.89",
        companyName:"四川财务商务有限公司"
      }
    ]
  },

  // 展开收起
  toShowItem(e) {
    var that = this;
    var index = 0;
    var id = e.currentTarget.dataset.id;
    var listname = e.currentTarget.dataset.listname;
    var listnameItem = that.data[listname];
    console.log(e)
    for (var item of listnameItem) {
      if (item.id == id) {
        if (listnameItem[index].isShow == "" || listnameItem[index].isShow == undefined) {
          listnameItem[index].isShow = "true"
        } else {
          listnameItem[index].isShow = ""
        }
      }
      index++;
    }
    that.setData({
      [listname]: listnameItem
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