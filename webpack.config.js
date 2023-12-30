import webpack from 'webpack'
import { dir } from 'console'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = 'production'

const config = {
    entry: {
        employees: './src/employees.jsx'
    },
    output: {   
        filename: '[name].bundled.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: (
        rules [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }

        ]
    ),
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    devtool: 'source-map'
}

export default function() {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}