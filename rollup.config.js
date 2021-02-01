import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve' // 可以告诉 Rollup 如何查找外部模块
import commonjs from '@rollup/plugin-commonjs' // convert CommonJS to ES2015 before Rollup can process them
// import { terser } from 'rollup-plugin-terser' // 压缩
// import replace from '@rollup/plugin-replace' // 替换属性或者值 process.env.NODE_ENV 环境变量的设置

export default [
  {
    input: 'src/index.js', // 要打包的文件源路径(引用程序的主要入口)
    output: { // 文件输出配置
      file: 'lib/index.js', // 输出文件路径
      format: 'cjs', // 输出文件格式 cjs – CommonJS，适用于 Node 和 Browserify/Webpack
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**', // 排除node_modules文件，只编译我们的源代码
        babelHelpers: 'runtime'
      })
    ],
  }
]