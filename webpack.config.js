const webpack           = require('webpack')
const WebpackModules    = require('webpack-modules')

const sveltePreprocess  = require('svelte-preprocess')

const path      = require('path')

const config    = require('sapper/config/webpack.js')
const pkg       = require('./package.json')

const mode      = process.env.NODE_ENV
const dev       = mode === 'development'

const resolve   = {
  extensions: [ '.mjs', '.js', '.ts', '.json', '.svelte', '.html' ],
  mainFields: [ 'svelte', 'module', 'browser', 'main' ],
  alias: {svelte: path.resolve('node_modules', 'svelte')},
}

const rules     = (server) => {
  return [
    {
      test: /\.ts$/,
      loader: 'ts-loader',
    },
    {
      test: /\.(svelte|html)$/,
      use: server
        ? {
          loader: 'svelte-loader',
          options: {
            dev,
            css: false,
            generate: 'ssr',
            hydratable: true,
            preprocess: sveltePreprocess({sourceMap: dev}),
          },
        }
        : {
          loader: 'svelte-loader',
          options: {
            dev,
            hydratable: true,
            preprocess: sveltePreprocess({sourceMap: dev}),
            hotReload: false,
          },
        },
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        'file-loader',
      ],
    },
  ]
}

module.exports = {
  client: {
    entry: {main: config.client.entry().main.replace(/\.js$/, '.ts')},
    output: config.client.output(),
    module: {rules: rules(false)},
    plugins: [
      new webpack.DefinePlugin({
                                 'process.browser': true,
                                 'process.env.NODE_ENV': JSON.stringify(mode),
                               }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
    resolve,
    mode,
  },
  server: {
    entry: {server: config.server.entry().server.replace(/\.js$/, '.ts')},
    output: config.server.output(),
    target: 'node',
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {rules: rules(true)},
    plugins: [ new WebpackModules() ],
    performance: {hints: false},
    resolve,
    mode,
  },
  serviceworker: {
    entry: {'service-worker': config.serviceworker.entry()['service-worker'].replace(/\.js$/, '.ts')},
    output: config.serviceworker.output(),
    resolve: {extensions: [ '.mjs', '.js', '.ts', '.json' ]},
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
      ],
    },
    mode,
  },
}
