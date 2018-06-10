module.exports = {
    entry: {    
        main: __dirname + "/public/javascripts/main.js",
        produce : __dirname + "/public/javascripts/produce/produce.js"
    },
    output: {
        path: __dirname + "/public/javascripts/dist",
        filename: "[name].js" 
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