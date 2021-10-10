const express = require('express')
const app = express()
const path = require('path')



//启动数据库
require('./middle/mongoose')

// 跨域中间件
app.use(require('./middle/cors'))
//处理数据的中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//session中间件
app.use(require('./middle/session'))
//静态资源库
app.use(express.static(path.join(__dirname, './public')))

app.use('/', require('./router/index'));

app.get('*', (req, res) => {
    // 解决前后端路由冲突
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(80, () => {
    console.log('服务器启动成功，80端口...');
})

