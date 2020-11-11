const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#2ab561' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ]
  }
}
