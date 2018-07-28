const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/demo",
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            title: "react-mini demo"
        })
    ]
}