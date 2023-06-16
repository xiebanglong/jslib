const pkg = require('../package.json');
const babel = require('@rollup/plugin-babel');

const version = pkg.version;
const name = pkg.name;

const banner = `/*!
* ${name} ${version}
* Licensed under MIT
*/
`;

function getCompiler() {
  return babel({
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
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3
        }
      ]
    ]
  });
}

module.exports = {
  banner,
  getCompiler
};
