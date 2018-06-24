// pages/douban/douban.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieIndex:{
      start: 0,
      count: 9
    },
    subjects:[]
  },
  // 抽取的函数
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
  },
  getData: function (){
    var that = this;
    
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: that.data.movieIndex,
      header: {
        "content-type": "json"
      },
      success: function (backData) {
        console.log(backData);
        var subData = backData.data.subjects;
        var oldArr = that.data.subjects;
        for (var i = 0; i < subData.length; i++) {
          var num = subData[i].rating.stars / 10;
          var starsArr = [];
          for (var j = 1; j < 5; j++) {
            starsArr.push(j > Math.floor(num) ? 0 : 1);
          }
          subData[i].starsArr = starsArr;
          oldArr.push(subData[i]);
        }
        that.setData({
          subjects: oldArr
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 触底事件
  onReachBottom: function(event) {
    //  console.log(event);
    // 显示loading动画
    wx.showNavigationBarLoading();
    
    this.data.movieIndex.start += this.data.movieIndex.count;
    this.getData();
    
  }
})