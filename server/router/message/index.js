const express = require('express')
const router = express.Router()
const msgDB = require('../../db/message')
const mongoose = require('mongoose')

// 留言发表
router.post("/report", async (req, res) => {
    // 验证是否登录
    if (!req.session.userInfo) {
        return {
            code: 1,
            msg: '用户未登录'
        }
    }

    let { msg } = req.body

    if (!msg.trim()) {
        return res.send({
            code: 1,
            msg: "留言内容为空"
        })
    }

    //存储到数据库
    await msgDB.create({
        msg,
        user: req.session.userInfo._id
    })

    //返回前端
    res.send({
        code: 0,
        msg: "留言完成"
    })

})

// 留言获取
router.get('/get', async (req, res) => {
    let data = await msgDB.find({}, {}, { sort: { date: -1 } }).populate('user', { pass: 0 }).populate('children.user', { pass: 0 })
        .populate('children.replyUser', { pass: 0 });

    res.send({
        code: 0,
        msg: '留言请求成功',
        data
    })

})

// 回复
router.post('/reply', async (req, res) => {
    let { msg, _id, replyUserId } = req.body
    //验证数据
    if (!msg || !_id || !replyUserId) {
        return res.send({
            code: 1,
            msg: "数据格式不正确"
        })
    }

    //存储
    try {
        await msgDB.findByIdAndUpdate(_id, {
            $push: {
                children: {
                    msg,
                    user: req.session.userInfo._id,
                    replyUser: replyUserId
                }
            }
        })
        res.send({
            code: 0,
            msg: "回复成功"
        })
    } catch (e) {
        res.send({
            code: 4,
            msg: e
        })
    }


})

//点赞
router.post('/like', async (req, res) => {
    //验证用户是否登录
    if (!req.session.userInfo) {
        return res.send({
            code: 2,
            msg: "用户未登录"
        })
    }

    let { item, childItem } = req.body

    let replyUserId = req.session.userInfo._id

    try {
        //子留言的点赞
        if (childItem) {
            let doc = (await msgDB.findById(item._id)).children.id(childItem._id)

            // 转换格式
            let likes = [...doc.likes].map(item => mongoose.Types.ObjectId(item).toString())
            let index = likes.indexOf(replyUserId)
            if (index !== -1) {
                likes.splice(index, 1)
            } else {
                likes.push(replyUserId)
            }

            // 更新数据
            await msgDB.updateOne({ _id: item._id, 'children._id': childItem._id }, {
                $set: { 'children.$.likes': likes }
            })
            return res.send({
                code: 0,
                msg: "点赞完成"
            })
        }

        //父留言的点赞
        let doc = await msgDB.findById(item._id)
        let likes = [...doc.likes].map(item => mongoose.Types.ObjectId(item).toString())
        let index = likes.indexOf(replyUserId)
        if (index !== -1) {
            likes.splice(index, 1)
        } else {
            likes.push(replyUserId)
        }
        await msgDB.updateOne({ _id: item._id }, {
            $set: { likes }
        })
        return res.send({
            code: 0,
            msg: "点赞完成"
        })

    } catch (e) {
        console.log(e);
        res.send({
            code: 4,
            msg: e
        })
    }

})




module.exports = router