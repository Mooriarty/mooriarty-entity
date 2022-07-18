/**
 * created by mooriarty
 * @desc 操作数据库
 */

const {DataTypes} = require('sequelize')
const {getSeqConfig} = require('../db/seq')
class MooriartyModel{
    getTableStructureSQL(ip, databaseName, tableName, userName, password){
        return getSeqConfig(ip, databaseName, tableName, userName, password).define({

        })
    }
}
module.exports = new MooriartyModel()


