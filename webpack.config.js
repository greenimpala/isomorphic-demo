const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

const DIST_PATH = __dirname + "/dist"

function isExternal(req) {
    if (typeof req.userRequest !== 'string') {
        return false
    }

    return req.userRequest.indexOf('node_modules') >= 0
}

const loaders = [
    {
        test: /\.md$/,
        loader: "html!markdown"
    },
    {
        test: /\.css$/,
        loader: "css-loader"
    },
    {
        test: /\.(png|jp(e)?g|gif)(\?.+)?$/,
        loader: 'file-loader?name=/images/[hash].[ext]'
    },
    {
        test: /\.(ico)(\?.+)?$/,
        loader: 'file-loader?name=/images/[name].[ext]'
    },
    {
        test: /\.(eot|woff|woff2|svg|ttf)(\?.+)?$/,
        loader: 'file-loader?name=/fonts/[hash].[ext]'
    },
    {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'react']
        }
    }
]

const client = {
    name: "client",
    entry: "./entry_client.js",
    output: {
        path: path.join(DIST_PATH, 'public'),
        filename: 'client.bundle.js'
    },
    module: {
        loaders: loaders.concat([
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"]})
            }
        ])
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: isExternal,
            filename: '[name].bundle.js'
        }),
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify(process.env.NODE_ENV)
           }
        })
    ]
}

const server =  {
    name: "server",
    entry: "./entry_server.js",
    target: "node",
    output: {
        path: DIST_PATH,
        filename: "server.bundle.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: loaders.concat([
            {
                test: /\.scss$/,
                loader: 'ignore-loader'
            }
        ])
    }
}

module.exports = [client, server]
