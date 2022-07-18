/**
 * created by mooriarty
 * @desc 连接数据库 导出对象
 */
const {Sequelize} = require('sequelize')

class MooriartySeq {

    getSeqConfig(ip, databaseName, tableName, userName, password) {
        const seq = new Sequelize(databaseName, userName, password, {
            host: ip,
            dialect: 'mysql'
        })
        seq.authenticate().then(() => {
            console.log("database connect successful")
        }).catch(err => {
            console.log("database connect fail")
        })
        return seq
    }

}

module.exports = new MooriartySeq()