const wikiRoute = require('./wiki')

module.exports = app => {
    app.use(wikiRoute.routes())
        .use(wikiRoute.allowedMethods({
            throw: true,
        }))
}