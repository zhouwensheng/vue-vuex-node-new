var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成一个HTML文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//可以把css从js中抽离出来
const CopyWebpackPlugin = require('copy-webpack-plugin');//拷贝文件
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const srcDir = path.resolve(process.cwd(),'src');
// let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//可视化工具
module.exports = {
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      method: `${srcDir}/js/commonmethod.js`,
      basePath: `${srcDir}/paths/devBasePath.js`
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // filename: 'build.js'
    filename:'js/[name].[chunkhash].js',
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
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks (module) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, './node_modules')
            ) === 0
          )
        }
      }),
       // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
      // new BundleAnalyzerPlugin()//可视化工具
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
 
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true,
//     overlay: true,
//     port:'3330',
//     host:'local.zhouws.com',
// //     proxy: {
// //   "/api": {
// //     target: "http://local.zhouws.com:3311",
// //     changeOrigin:true,
// //     pathRewrite: {"^/api" : ""}
// //   }
// // }

//   },
  performance: {
    hints: false
  }
}

