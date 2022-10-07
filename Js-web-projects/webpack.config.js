const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// let PrintPage = new HtmlWebpackPlugin({
//     title: "Blog",
//     filename: "index.html",
//     template: 'src/index.html'
//    });

// console.log("PrintPage");
// console.log(PrintPage);
module.exports = {

    mode: "development",
    entry:{
        main:path.resolve(__dirname, 'src/assets/js/app.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        clean:true
    },
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 5001,
        open: true,
        hot: true,
    },
    // loaders
    module:{
        
        rules:[
            //css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],                                                                               
               
              },
             
            //images
            // {
            //     test: /\.(svg|png|jpg|webp|ico|jpeg)$/, type:'asset/resource',
               
            //     // loader:'file-loader',
            //     // options:{
            //     //     name: '[name].[ext]',
            //     //     outputPath :'assets/img'
            //     // }
            // },
            // js babel
            // {test: /\.js$/,
            //     exclude: /node_module/,
            //     use:{
            //         loader : 'babel-loader',
            //         // loader:'file-loader',
            //         options :{
            //             presets:['@babel/preset-env'],
            //             // name:'[name].[ext]',
            //             // outputPath:'assets/js'
            //         }
            //     }

            // }
        ]
    },
    //Plugins
    
    
    plugins:[        
        new HtmlWebpackPlugin({
        title: "Home",
        filename: "index.html",
        template: path.resolve(__dirname, 'src/index.html')
       }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/form.html'),
    //     location:'section',
    //     // template: path.resolve(__dirname, 'src/index.html')
    //     template_filename: ['index.html', 'sound-board.html']
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/incrementing-counter.html'),
    //     location:'counter',
    //     template_filename: ['index.html']
    //    }),
       new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'src/movie-app.html'),
        location:'movie',
        template_filename: ['index.html']
       }),
       new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'src/background-slider.html'),
        location:'background',
        template_filename: ['index.html']
       }),
       new MiniCssExtractPlugin(),
    //    Lisitng file in dist folder
       new CopyWebpackPlugin({
        patterns: [
            { from: './src/assets', to: './assets' },
            { from: "./src/assets/img", to: "./img" },
            { from: "./src/assets/video", to: "./video" },
            // noErrorOnMissing: true
            // { from: "./src/favicon.ico", to: "./favicon.ico" },
        ],
      })
    ]
}