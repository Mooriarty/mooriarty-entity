/**
 * created by mooriarty
 * @desc 操作数据库
 */
const {getTableStructureSQL} = require('../model/mooriarty.model')
class MooriartyService{
    async getTableStructure(ip, databaseName, tableName, userName, password) {
        await getTableStructureSQL(ip, databaseName, tableName, userName, password).create({tableName})
    }
}
module.exports = new MooriartyService()