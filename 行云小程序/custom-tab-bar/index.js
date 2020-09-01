// custom-tab-bar/tabbar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    "color": "#B1B1B1",
    "selectedColor": "#000",
    list: [
      {
        pagePath: "/pages/newAnalysis/newAnalysis",
        text: "新分析",
        iconPath: "/images/icon01.png",
        selectedIconPath: "/images/icon01-active.png"
      },
      {
        pagePath: "/pages/history/history",
        text: "分析历史",
        iconPath: "/images/icon02.png",
        selectedIconPath: "/images/icon02-active.png"
      },
      {
        pagePath: "/pages/knowledge/knowledge",
        text: "知识库",
        iconPath: "/images/icon03.png",
        selectedIconPath: "/images/icon03-active.png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "/images/icon04.png",
        selectedIconPath: "/images/icon04-active.png"
      }
    ]
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    // switchTab(e) {
    //   const data = e.currentTarget.dataset
    //   const url = data.path
    //   wx.switchTab({ url })
    //   this.setData({
    //     selected: data.index
    //   })
    // }
    switchTab(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  }
})

