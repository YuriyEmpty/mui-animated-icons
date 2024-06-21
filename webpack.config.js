/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 09.08.2021
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./tests/app.component.tsx",
    devServer: {
        port: 8080,
        // proxy: {
        //     "/api": "localhost",
        //     "/assets": {
        //         target: "localhost",
        //         secure: false,
        //         bypass: request => request.originalUrl
        //     },
        //     "/": {
        //         target: "localhost",
        //         secure: false,
        //         bypass: request => {
        //             if(request.headers.accept.indexOf("html") !== -1) {
        //                 return "/index.html";
        //             }
        //         }
        //     }
        // },
        static: [
            {
                directory: path.join(__dirname, "assets"),
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./assets/index.html",
            favicon: "./assets/favicon.ico"
        })
    ],
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js",
        assetModuleFilename: "assets/resources/[hash][ext][query]"
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    experiments: {
        topLevelAwait: false
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                loader: "file-loader",
                options: {
                    outputPath: "assets/images"
                }
            },
            {
                test: /\.mp3$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/audio"
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
}