/**
 * created by mooriarty
 * @desc 操作数据库
 */
const {DataTypes} = require('sequelize')
const {getSeqConfig} = require('../db/seq')

class MooriartyModel {
    getColumnsSQL(ip, userName, password) {
        let columnsSQL =  getSeqConfig(ip, userName, password).define('COLUMNS',{

            TABLE_SCHEMA:{
                type: DataTypes.STRING(64),
                comment: '库名'
            },
            TABLE_NAME: {
                type: DataTypes.STRING(64),
                comment: '表名'
            },
            COLUMN_NAME: {
                type: DataTypes.STRING(64),
                comment: '字段名'
            },
            DATA_TYPE:{
                type: DataTypes.TEXT,
                comment: '字段类型'
            },
            COLUMN_COMMENT:{
                type: DataTypes.TEXT,
                comment: '字段注释'
            },
            COLUMN_KEY:{
                type: DataTypes.TEXT,
                comment: '主键标识'
            },
            ORDINAL_POSITION:{
                type: DataTypes.INTEGER,
                comment: '字段排序'
            }
        },{
            freezeTableName: true,
            timestamps: false
        })
        columnsSQL.removeAttribute('id')
        return columnsSQL
    }
    getTablesSQL(ip, userName, password) {
        let tablesSQL =  getSeqConfig(ip, userName, password).define('TABLES',{
            TABLE_NAME: {
                type:DataTypes.STRING(64),
                comment:'表名'
            },
        },{
            freezeTableName: true,
            timestamps: false
        })
        tablesSQL.removeAttribute('id')
        return tablesSQL
    }
}

module.exports = new MooriartyModel()


