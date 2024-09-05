const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][ext]",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
                type: "asset/resource",
            },

            {
                test: /\.(c|sa|sc)ss$/i, // Регулярное выражение для обработки файлов с расширением .css
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // Загрузчики, используемые для обработки CSS-файлов
            },
        ],
    },

    mode: "development",
};
