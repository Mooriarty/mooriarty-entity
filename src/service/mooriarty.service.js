/**
 * created by mooriarty
 * @desc 操作数据库
 */
const {getColumnsSQL, getTablesSQL} = require('../model/mooriarty.model')
const {Op} = require("sequelize");

class MooriartyService {
    async getSchemeInfo(ip, userName, password, tableSchema, tableName) {
        let tableSQLResponse = await getTablesSQL(ip, userName, password).findAll({
            where: {TABLE_SCHEMA: tableSchema}
        })
        let tableSQLResponseBody = []
        await tableSQLResponse.forEach(item => {
            tableSQLResponseBody.push(item.dataValues.TABLE_NAME)
        })
        return await getColumnsSQL(ip, userName, password).findAll({
            order: [["ORDINAL_POSITION", "asc"]],
            where: {
                [Op.and]: [{
                    TABLE_SCHEMA: tableSchema
                }, {
                    TABLE_NAME: tableName
                }, {
                    TABLE_NAME: tableSQLResponseBody
                }]
            }
        })
    }
}

module.exports = new MooriartyService()