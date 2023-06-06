const common = require('./rollup');
const babel = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    // 打包为esm模块
    format: 'es',
    banner: common.banner
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      // 不使用独立babel配置
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
              node: '0.12'
            },
            // 不使用独立babel配置
            modules: false,
            // 松散模式，更好兼容 IE8
            loose: true
          }
        ]
      ],
      exclude: 'node_modules/**',
      // 使用 转换器 将运行时兼容代码使用coreJs转换
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 2
          }
        ]
      ]
    })
  ]
};
