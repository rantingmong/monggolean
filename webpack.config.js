const path = require('path')

module.exports = {
  entry: './fnd/index.ts',
  output: {
    filename  : 'program.js',
    path      : path.resolve(__dirname, 'public')
  },
  mode: 'development',
  devServer: {
    port: 1100,
    contentBase: './public'
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: true
            },
            emitCss: true,
            preprocess: require('svelte-preprocess')({ })
          },
        }
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false, //necessary if you use url('/path/to/some/asset.png|jpg|gif')
            }
          }
        ]
      },
    ]
  }
}
