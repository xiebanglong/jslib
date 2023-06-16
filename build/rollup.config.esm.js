const common = require('./rollup');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    // 打包为esm模块
    format: 'es',
    banner: common.banner
  },
  plugins: [common.getCompiler()]
};
