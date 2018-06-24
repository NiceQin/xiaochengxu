// pages/useAPI/useAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290',

      success: function (backData) {
        // console.log(backData);
        that.setData({
          movies: backData.data.movies
        })
      }
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
  onShareAppMessage: function () {
  
  },
  weather: function (){
    wx.request({
      url: 'http://wthrcdn.etouch.cn/weather_mini', //地址
      // 数据
      data: {
        city: '深圳'
      },
      // 方法
      success: backData => console.log(backData)
      // 回调函数
    })
  },
  douban: function (){
    
    wx.request({
      url: 'https://douban.uieee.com/v2/book/1220562',
      //必须要设置"content-type":"json",不然会报错 400 (Bad Request)
      header: {
        "content-type": "json"
      },
      success: function (backData) {
        console.log(backData);
      }
    })
  },
  goto: function (event){
    // console.log(event);
    var movieId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?movieId=' + movieId,
    })
  }
})