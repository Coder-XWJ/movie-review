// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

var rp = require('request-promise');

// 云函数入口函数
exports.main = async(event, context) => {

	return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`)
    .then(function(res) {
      console.log(res);
      return res;
    })
    .catch(function(err) {
      console.error(err);
    });
}