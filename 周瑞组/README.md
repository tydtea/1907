## 组员
#### 周瑞 陈皓男 戴元晞 白廷东 郝罗强

------

#### 项目地址：<https://github.com/zr6b/juooo>

## 4月27日 周瑞
- 创建了项目，安装了必要组件参照package.json
- 分类了文件夹 eticket：票夹  juooo：首页 theatre：剧院  myjuooo：我的
- 在app.js里写了路由
- 设置setupProxy.js     "/juoo"作为代理
- index.js 引入axios作为全局 实现axios拦截（就不用加代理的/juooo了,data也不需要大括号）
- 在首页调用了热门演出的数据
- 首页热门演出： https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2

