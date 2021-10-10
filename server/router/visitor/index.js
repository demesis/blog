const express = require("express")
const router = express.Router()
const visitorDB = require("../../db/visitor")

//获取最新12条登陆信息
router.get("/", async (req, res) => {

  let data = await visitorDB
    .find({}, {}, { sort: { date: -1 } })
    .populate("visitor", { pass: 0 })

  res.send({
    code: 0,
    msg: "查询成功",
    data
  })

})


module.exports = router









