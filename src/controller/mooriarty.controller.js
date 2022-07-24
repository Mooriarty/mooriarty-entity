/**
 * created by mooriarty
 * @desc 异步操作业务逻辑
 */
const {getSchemeInfo} = require('../service/mooriarty.service')

class MooriartyController {
    async sqlMapperEntity(ctx, next) {
        const {ip, userName, password, tableSchema, tableName} = ctx.request.body
        try {
            const response = await getSchemeInfo(ip, userName, password, tableSchema, tableName)
            ctx.body = {
                code: 0,
                message: 'success',
                content: response
            }
        } catch (err) {
            ctx.body = {
                code: 1,
                message: 'failure'
            }
        }

    }
}

module.exports = new MooriartyController()