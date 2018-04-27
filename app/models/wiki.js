var mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise

/**
 *	定义wiki字段
 * 	title  wiki名称
 * 	createTime 创建时间
 *  updateTIme 修改时间
 *  uid 用户id
 *  wiki    wiki内容
 */

const ProjectSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    list: [{
        title: {
            type: String,
            required: true
        },
        wiki: {
            type: String,
            required: true,
            default: ''
        },
        createTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date,
            default: Date.now
        },
    }]
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)