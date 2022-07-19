/**
 * created by Mooriarty
 * @params
 * @desc 路由配置
 */

const Router = require('koa-router')
const { sqlMapperEntity } = require('../controller/mooriarty.controller')

const router = new Router({prefix: '/mooriarty'})
router.post('/sqlMapperEntity',sqlMapperEntity)
module.exports = router.routes()