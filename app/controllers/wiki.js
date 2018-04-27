var Wiki = require('../models/wiki')
var jwt = require('jsonwebtoken')
var jwtKey = require('../config').jwtKey

class wikiController {
    static isAuth(ctx) {

    }

    static async list(ctx) {
        const _list = await Wiki.find({}, 'list')

        if (_list) {
            return ctx.success({
                data: {
                    list: _list
                }
            })
        } else {
            return ctx.error({
                msg: '获取失败'
            })
        }
    }

    static async add(ctx) {
        const _list = ctx.request.body.list
        const _uid = ctx.request.body.uid

        console.log('_list', ctx.request.body);


        const _wiki = await new Wiki({
            uid: _uid,
            list: _list
        }).save()

        if (_wiki) {
            return ctx.success({
                msg: '添加成功'
            })
        } else {
            return ctx.error({
                msg: '获取失败'
            })
        }


    }
}

module.exports = wikiController