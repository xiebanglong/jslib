const common = require('./rollup');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'clone',
    banner: common.banner
  },
  plugins: [
    // 支持依赖cjs形式的模块
    commonjs(),
    // 把node_modules依赖打包进来
    nodeResolve({
      main: true,
      extension: ['.js']
    }),
    common.getCompiler()
  ]
};
