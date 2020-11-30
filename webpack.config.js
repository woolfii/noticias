module.exports = {
    entry:{
      user: "./src/app/index.js",
      admin: './src/app/adm.js'
    },
    output: {
        path:__dirname+'/src/public',
        filename: '[name].bundle.js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
        ]
    }
};