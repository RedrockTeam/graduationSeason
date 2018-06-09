module.exports = {
    entry: __dirname + "/public/javascripts/main.js",
    output: {
        path: __dirname + "/public/javascripts/dist",
        filename: "bundle.js" 
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}