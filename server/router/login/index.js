const express = require('express')
const router = express.Router()
const userDB = require('../../db/user')
const visitorDB = require('../../db/visitor')

// 登录接口
router.post('/', async (req, res) => {
    let { user, password } = req.body

    let doc = await userDB.findOne({ user })



    if (!doc) {
        return res.send({
            code: 3,
            msg: '用户不存在'
        })
    }

    if (doc.password !== password) {
        return res.send({
            code: 5,
            msg: '账号或者密码错误'
        })
    }

    //配置session,将用户信息存入session中
    req.session.userInfo = doc

    //添加当前用户到访问表
    let visitorDOC = await visitorDB.findOne({ visitor: doc._id })
    if (visitorDOC) {
        await visitorDB.updateOne({ visitor: doc._id }, { date: Date.now() })
    } else {
        await visitorDB.create({ visitor: doc._id })
    }


    res.send({
        code: 0,
        msg: '登录成功',
        data: {
            user: doc.user,
            photo: doc.photo

        }
    })





})

// 检测是否登入
router.post('/check', async (req, res) => {
    if (req.session.userInfo) {
        res.send({
            code: 0,
            msg: '已登录',
            data: req.session.userInfo
        })
    } else {
        res.send({
            code: 1,
            msg: '未登录',
        })
    }
})

// 退出登录
router.post('/loginout', (req, res) => {
    req.session.destroy()
    res.send({
        code: 0,
        msg: '退出登录成功'
    })
})

module.exports = router