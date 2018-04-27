var Router = require('koa-router')
var wikiHandler = require('../controllers/wiki')
var baseApi = require('../config').baseApi
var jwt = require('../middlewares/jwt')

const api = 'wiki'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

// 登录接口，返回json web token
router
    .get('/', wikiHandler.list)
    .post('/add', wikiHandler.add)

module.exports = router