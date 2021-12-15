import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2'
import typescriptEngine from 'typescript';
import external from 'rollup-plugin-peer-deps-external';
import NpmImport from 'less-plugin-npm-import';

import pkg from './package.json';

export default {
  input: "src/index.tsx",
  output: [{
    file: pkg.main, // 會去讀取 package.json 的 main 欄位
    format: 'cjs', // Common JS
    exports: 'named',
  },{
    file: pkg.module,
    format: 'es',
    exports: 'named',
  }],
  plugins: [
    postcss({
      modules: true,
      extensions: [".css"],
      use: [['less', {
        javascriptEnabled: true,
        plugins: [new NpmImport({prefix: '~'})],
      }]],
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: typescriptEngine,
      include: ['*.js+(|x)', '**/*.js+(|x)'],
      exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    resolve(),
  ]
};