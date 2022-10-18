const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const htmlPageNames = [
  {
      pageName: 'index.html',
      title: ''
  }, 
  // {
  //     pageName: 'architecture.html',
  //     title: 'Lsdigital gallery'
  // }, 
  // {
  //     pageName: 'detail-page.html',
  //     title: 'Lsdigital gallery'
  // }, 
];
let htmlFileName = htmlPageNames.map(htmlPage=> htmlPage.pageName);
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
      // template: `./src/${name.pageName}`,
      filename: `${name.pageName}`, 
      // chunks: [`${name.pageName}`],
      // chunks: [name.pageName.replace(/-(\w)/g, (match, c) => c.toUpperCase())],
      title: name.title,
      template: path.resolve(__dirname, `src/${name.pageName}`),
  })
});

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,
  entry: [
    './src/assets/js/app.js',
    './src/assets/css/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
  },
  optimization: {
    minimizer: [
      // new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new CopyPlugin({
        patterns: [
          {from: 'src/*.html', to: '[name].[ext]'},
          // { from: './src/assets', to: './assets' },
          { from: "./src/assets/img", to: "./img" },
          { from: "./src/assets/video", to: "./video" },
          // { from: "./src/assets/favicon.ico", to: "./favicon.ico" },
          // { from: './src/assets/images/*',to: 'images/[name].[ext]'}
         ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            only: ["./src"],
            // name: '[name][ext]',
            // outputPath :'./js/'
          }
        },
      }, {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
            },
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'assets/app.css',
      filename: argv.mode ? "./css/[name].[contenthash].css" : "./css/scss/[name].[contenthash].css",
    }),
    // new HtmlWebpackPartialsPlugin({
    //   path:path.join(__dirname,'./src/toast-notification.html'),
    //     location:'toastNotification',
    //   template_filename: ['index.html', 'form.html']
    // }),
    //  new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/dad-jokes.html'),
    //     location:'dadJoke',
    //     template_filename: htmlFileName
    //    }),
    //     new HtmlWebpackPartialsPlugin({
    //         path:path.join(__dirname,'src/event-keycodes.html'),
    //         location:'eventkeycode',
    //         template_filename: htmlFileName
    //     }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/faq-collapse.html'),
    //     location:'faq',
    //     template_filename: htmlFileName
    //    }),
       new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'./src/form.html'),
        location:'form-validation',
        // template: path.resolve(__dirname, 'src/index.html')
        template_filename: htmlFileName
       }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/progress-steps.html'),
    //     location:'progress-steps',
    //     template_filename: htmlFileName
    //    }),
    //   new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/sound-board.html'),
    //     location:'sound-board',
    //     template_filename: htmlFileName
    //    }),
    //   new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/incrementing-counter.html'),
    //     location:'counter',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/movie-app.html'),
    //     location:'movie',
    //     template_filename: htmlFileName
    //    }),
    // new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/random-choice-picker.html'),
    //     location:'random-color',
    //     template_filename: htmlFileName
    //    }),
    // new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/animated-navigation.html'),
    //     location:'navigation',
    //     template_filename: htmlFileName
    //    }),
    
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/drink-water.html'),
    //     location:'drinkwater',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/background-slider.html'),
    //     location:'background',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/button-ripple-effect.html'),
    //     location:'ripple',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/drawing-app.html'),
    //     location:'drwaapp',
    //     template_filename: htmlFileName
    //    }),
    //     new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/content-placeholder.html'),
    //     location:'contPlace',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/drag-n-drop.html'),
    //     location:'drag-and-drop',
    //     template_filename: htmlFileName
    //    }),
    //     new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/sticky-navigation.html'),
    //     location:'sticky-navbar',
    //     template_filename: htmlFileName
    //    }),
    //    new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'src/double-vertical-slider.html'),
    //     location:'doublevsld',
    //     template_filename: htmlFileName
    //    }),
    // new HtmlWebpackPartialsPlugin({
    //     path:path.join(__dirname,'./src/footer.html'),
    //     location:'footer',
    //     template_filename: htmlFileName
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
  ].concat(multipleHtmlPlugins),
  devServer: {
    contentBase: [
      path.join(__dirname, '/src'),
    ],
    watchContentBase: true,
    // compress: true,
    port: 9000,
    open: true,
  },
});
