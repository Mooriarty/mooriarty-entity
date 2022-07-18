/**
 * created by Mooriarty
 * @params
 * @desc 路由配置
 */

const Router = require('koa-router')
const { sqlMapper, sqlEntity } = require('../controller/mooriarty.controller')

const router = new Router({prefix: '/mooriarty'})
router.post('/sqlMapper',sqlMapper)
router.post('/sqlEntity',sqlEntity)
module.exports = router.routes()