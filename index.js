const compression = require('compression')
const express = require('express')
const bodyParser = require('body-parser')

const renderRoute = require('./dist/server.bundle.js').default
const PORT = process.env.PORT || 8000

const redirectTrailingSlashes = (req, res, next) => {
   if(req.url.substr(-1) == '/' && req.url.length > 1) {
       res.redirect(301, req.url.slice(0, -1));
   } else {
       next()
   }
}

const app = express()

app.use(compression())
app.use(redirectTrailingSlashes)
app.use(bodyParser.urlencoded({ extended: false }))
app.get('*', renderRoute) // Check if route before handing to static
app.use(express.static(__dirname + '/dist/public'))
app.listen(PORT)

console.info('Listening on port', PORT)
