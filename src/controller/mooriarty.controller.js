/**
 * created by mooriarty
 * @desc 异步操作业务逻辑
 */
const {getTableStructure} = require('../service/mooriarty.service')

class MooriartyController {
    async sqlMapper(ctx, next) {
        const {ip, databaseName, tableName, userName, password} = ctx.request.body
        const response = await getTableStructure(ip, databaseName, tableName, userName, password)
        ctx.body = ctx.request.body
    }


    async sqlEntity(ctx, next) {
        ctx.body = 'sqlEntity'
    }
}

module.exports = new MooriartyController()