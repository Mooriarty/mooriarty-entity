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
            let typeMap = {
                'char': '',
                'set': '',
                'timestamp': ''
            }
            response.forEach((item) => {
                let tableNameArr = item['COLUMN_NAME'].toLocaleLowerCase().split('_')
                for (let i = 1; i < tableNameArr.length; i++) {
                    tableNameArr[i] = tableNameArr[i].charAt(0).toLocaleUpperCase() + tableNameArr[i].substring(1)
                }
                item['COLUMN_NAME'] = `${tableNameArr.join('')}`
                item['DATA_TYPE'] = typeMap['DATA_TYPE']
            })
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