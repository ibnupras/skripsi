const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    mode: "development",
    entry: ["./resources/views/webgis/js/src/index.js"],
    output: {
        path: path.resolve(__dirname, "public", "webgis", "js", "dists"),
        filename: "map.bundle.js",
        clean: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.sass|scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ["url-loader"]
            }
        ]
    }
};
