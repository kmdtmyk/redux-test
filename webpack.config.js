module.exports={
    entry: ["./src/index.js"],
    output: {
        path: __dirname+"/dist",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        moduleDirectories: [
            'node_modules',
        ],
        extensions: ['', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
}
