const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/api",createProxyMiddleware({
        target:"https://m.lagou.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}