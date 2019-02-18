module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'assets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Assets Management App' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#448AFF' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // vendor: [
    //   'axios',
    //   'firebase',
    //   '~/plugins/fireauth.js'
    // ],
    // maxChunkSize: 300000,
    // extractCSS: true,
    // analyze: {
    //   analyzerMode: 'static'
    // }
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     minSize: 3,
    //     maxSize: 3000,
    //     minChunks: 1,
    //     maxAsyncRequests: 5,
    //     maxInitialRequests: 3,
    //     automaticNameDelimiter: '.',
    //     name: true,
    //     cacheGroups: {
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true
    //       }
    //     }
    //   }
    // }
  },

  modules: [
    '@nuxtjs/bulma',
    [
      'nuxt-fire',
      {
        config: {
          development: {
            apiKey: 'AIzaSyBtg8nFf65H31P2M0iRtyiZudxVlFEtoUM',
            authDomain: 'assets-mngt.firebaseapp.com',
            databaseURL: 'https://assets-mngt.firebaseio.com',
            projectId: 'assets-mngt',
            storageBucket: 'assets-mngt.appspot.com',
            messagingSenderId: '98375434890'
          },
          production: {
            apiKey: 'AIzaSyBtg8nFf65H31P2M0iRtyiZudxVlFEtoUM',
            authDomain: 'assets-mngt.firebaseapp.com',
            databaseURL: 'https://assets-mngt.firebaseio.com',
            projectId: 'assets-mngt',
            storageBucket: 'assets-mngt.appspot.com',
            messagingSenderId: '98375434890'
          }
        }
      }
    ]
  ],
  router: {
    middleware: 'router-auth'
  },
  plugins: [
    '~/plugins/fireauth.js'
  ],

}

