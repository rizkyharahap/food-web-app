const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}
