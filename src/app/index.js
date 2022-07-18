const Koa = require('koa')
const KoaBody = require('koa-body')
const mooriartyRouter = require('../router/index')

const app = new Koa()
app.use(KoaBody())
app.use(mooriartyRouter)

module.exports = app