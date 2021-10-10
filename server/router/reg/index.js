const express = require('express')
const router = express.Router()
const userDB = require('../../db/user')

router.post('/', async (req, res) => {
    let { user, password } = req.body
    // 后端检测用户名密码是否合格
    let userR = /^[^\s]{2,8}$/,
        passR = /^[\w,.?;<>/|\\:'"!@#$%^&*()+-]{6,16}$/
    if (!userR.test(user) || !passR.test(password)) {
        //此时说明数据不符合要求
        return res.send({
            code: 1,
            msg: '数据格式错误'
        })
    }

    // 检测用户名是否存在
    let doc = await userDB.findOne({ user })
    if (doc) {
        return res.send({
            code: 2,
            msg: '用户名已经存在'
        })
    }

    // 创建文档
    await userDB.create({ user, password })



    res.send({
        code: 0,
        msg: '用户注册成功'
    })



})

module.exports = router