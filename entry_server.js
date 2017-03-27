import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { routes } from './src/app'

const file = fs.readFileSync('./index.html', 'utf8')

function renderRoute(req, res, next) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const html = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>)
            const document = file.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)
            res.send(document)
        } else {
            next()
        }
    })
}

export default renderRoute
