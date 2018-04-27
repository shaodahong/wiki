const config = {
	production: {
		port: 8080,
		connectString: 'mongodb://dev:dev1qaz2wsx@127.0.0.1:27017/wiki'
	},
	test: {
		port: 3000,
		connectString: 'mongodb://dev:db1234567@127.0.0.1:27017/wiki', 
	},
	develop:{
		port: 3333,
		connectString: 'mongodb://127.0.0.1:27017/wiki',
	}
}

const env = process.env.NODE_ENV? process.env.NODE_ENV: 'develop'

module.exports = {
	port: config[env].port,
	connectString: config[env].connectString,
	baseApi: 'api',
	jwtKey: '!@#zaq2017'
}

