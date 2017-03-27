import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import App from './src/app'
import { browserHistory } from 'react-router'

if (process.NODE_ENV === 'development') {
    require('file-loader?name=[name].[ext]!./index.html')
}

ReactDOM.render(<App/>, document.getElementById('root'))
