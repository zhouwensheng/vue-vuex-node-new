var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成一个HTML文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//可以把css从js中抽离出来
const CopyWebpackPlugin = require('copy-webpack-plugin');//拷贝文件
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const srcDir = path.resolve(process.cwd(),'src');
module.exports = {
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      method: `${srcDir}/js/commonmethod.js`,
      basePath: `${srcDir}/paths/loatBasePath.js`,
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'build.js'
    // filename:'js/[hash:8].[name].min.js',
  },
  plugins :[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
     new webpack.ProvidePlugin({
        '_': "underscore",'Vue':'vue','AppUtil':'method','BasePath':'basePath'
     }),
     new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        chunksSortMode:'dependency'
    }),
     new ExtractTextPlugin('styles.css'),
     new CopyWebpackPlugin([
        { 
            from:__dirname + '/src/image', 
            to: __dirname + '/dist/src/image' 
        },
      ]),
      new UglifyJsPlugin({
        compress: { warnings: false},
        mangle: { except: ['$super', '$', 'exports', 'require']}
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'css': [
              'vue-style-loader',
              'css-loader'
            ],
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }
    ]
  },
 
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port:'3330',
    host:'local.zhouws.com',
    proxy: {
  "/api": {
    target: "http://116.62.209.16:3333",
    changeOrigin:true,
    pathRewrite: {"^/api" : ""}
  }
}

  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  // module.exports.
}
