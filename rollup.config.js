import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/main.js',
  output: {
    file: 'rollup.bundle.js',
    format: 'iife'
  },
  // format: 'cjs',
  // treeshake: {propertyReadSideEffects: false},
  // plugins: [
  //   babel(),
  //   uglify()
  // ]
}
