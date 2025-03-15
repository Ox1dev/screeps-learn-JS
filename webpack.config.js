const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src", "main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    target: "node"
};
