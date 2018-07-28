const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/demo",
    plugins: [
        new HtmlWebpackPlugin({
            title: "react-mini demo"
        })
    ],
    devServer: {
        open: true
    }
}