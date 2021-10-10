const express = require('express')
const router = express.Router()

//注册接口
router.use('/reg', require('./reg/index'))

//登录接口
router.use('/login', require('./login/index'))

//修改资料接口
router.use('/user', require('./user/index'))

//留言接口
router.use('/msg', require('./message/index'))

// 后台接口
router.use('/admin', require('./admin/index'))

// 文章接口
router.use('/art', require('./art/index'))

//访客接口
router.use('/visitor', require('./visitor/index'))




module.exports = router
