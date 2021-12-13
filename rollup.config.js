import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';

export default {
  input: './src/Button.jsx',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    less()
  ]
}
