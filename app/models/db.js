var mongoose = require('mongoose')
var port = require('../config').port
var connectString = require('../config').connectString
// const dbConfig = {
// 	useMongoClient: true
// }
mongoose.connect(connectString);

// 连接成功 
mongoose.connection.on('connected', function() {
	console.log('Mongoose connection open to ' + connectString);
})

// 连接失败
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
})

// 断开连接
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose connection disconnected');
})

module.exports = mongoose