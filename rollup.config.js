import del from 'rollup-plugin-delete'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const contentScript = {
  input: './src/contentScript/index.ts',
  output: {
    file: 'dist/content-script/index.js',
    format: 'iife',
  },
  plugins: [
    typescript(),
    del({
      targets: ['dist/manifest.json', 'dist/images', 'dist/content-script'],
    }),
    terser(),
    copy({
      targets: [
        {
          src: 'manifest.json',
          dest: 'dist',
        },
        {
          src: 'images/',
          dest: 'dist',
        },
      ],
    }),
  ],
}

export default [contentScript]
