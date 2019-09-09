const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    publicPath: './', //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
    devServer: {
        disableHostCheck: true, //解invalid host header
    }
}