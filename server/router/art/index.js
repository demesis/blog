const express = require("express")
const router = express.Router()
const articleDB = require("../../db/article")

//获取所有文章列表
router.get('/all', async (req, res) => {

    let data = await articleDB
        .find({}, {}, { sort: { pv: -1 } })
        .populate("author", { pass: 0 })
    res.send({
        code: 0,
        msg: "查询完成",
        data
    })
})

//返回三条热门文章
router.get("/hot", async (req, res) => {
    let data = await articleDB
        .find({}, {}, { skip: 0, limit: 3, sort: { pv: -1 } })
        .populate("author", { pass: 0 })
    res.send({
        code: 0,
        msg: "查询完成",
        data
    })
}
)

//返回文章地址，并添加pv
router.post("/address", async (req, res) => {
    let { _id } = req.body

    let doc = await articleDB.findById(_id)

    if (!doc) {
        return res.send({
            code: 1,
            msg: "文章id错误",
            data: ""
        })
    }

    await articleDB.updateOne({ _id }, { $inc: { pv: 1 } })

    res.send({
        code: 0,
        msg: "地址查询完成",
        data: doc.md
    })

})


module.exports = router