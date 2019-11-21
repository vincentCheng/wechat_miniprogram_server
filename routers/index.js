/*
用来定义路由的路由器模块
 */
const express = require('express')

const UserModel = require('../models/UserModel')

// 得到路由器对象
const router = express.Router()

// 初次见面
router.get('/', async (req, res) => {
	const user = await UserModel.findOne({ username: 'admin' })

	if (!user) res.send({ status: 1, msg: "用户名或密码不正确!" })
	else res.send({ status: 0, data: "初次见面", user })
})

module.exports = router