const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: { extract: false },
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  configureWebpack: {
      plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: ['node finalize.js']
        })
      ]
    }
}
