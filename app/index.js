var path = require('path')
var http = require('http')

// koa family
var Koa = require('koa')
var bodyParser = require('koa-bodyparser')
var onerror = require('koa-onerror')
var helmet = require('koa-helmet')
var logger = require('koa-logger')
var views = require('koa-views')
var convert = require('koa-convert')
var koaStatic = require('koa-static-plus')
var favicon = require('koa-favicon')
var staticCache = require('koa-static-cache')
var historyApiFallback = require('koa-connect-history-api-fallback')

var mongoose = require('mongoose')
var db = require('./models/db')
var router = require('./routers/')
var response = require('./middlewares/response')
var responseFilter = require('./middlewares/responseFilter')
var port = require('./config').port

// 新建实例
const app = new Koa()

onerror(app)

app
	// // history router 指向根目录
	// .use(convert(historyApiFallback({
	// 	verbose: false
	// })))
	// favicon
	// .use(favicon(path.join(__dirname, './public/favicon.ico')))
	// 日志
	.use(logger())
	// post请求
	.use(bodyParser())
	// 过滤
	.use(helmet())
	// 静态缓存
	// .use(staticCache(path.join(__dirname, './views'), {
	// 	maxAge: 365 * 24 * 60 * 60
	// }))
	// // 静态目录
	// .use(convert(koaStatic(path.join(__dirname, './views'))))
	// // 配置模板文件目录和后缀名
	// .use(views(path.join(__dirname, './views'), {
	// 	extension: 'html'
	// }))
	// 错误处理
	.use(response)
	.use(responseFilter)

// 加载路由
router(app)

const server = http.createServer(app.callback())
server.listen(port, () => console.log(this))