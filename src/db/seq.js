/**
 * created by mooriarty
 * @desc 连接数据库 导出对象
 */
const Sequelize = require('sequelize')
class MooriartySeq {
    getSeqConfig(ip, userName, password) {
        return new Sequelize('information_schema', userName, password, {
            host: ip,
            dialect:'mysql'
        })
    }

}

module.exports = new MooriartySeq()