/*
用来定义路由的路由器模块
 */
const express = require('express')

// 得到路由器对象
const router = express.Router()

// 初次见面
router.get('/', (req, res) => { res.send({ status: 0, data: "初次见面" }) })

module.exports = router