import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';
import path from 'path';

export default [
  {
    input: "src/cli-index.js",
    output: {
      file: "dist/cli-index.js",
      format: "cjs"
    },
    external: ["shelljs", "yargs"]
  },
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: 'auto'
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        exports: 'auto'
      }
    ],
    plugins: [
      commonjs(),
      babel({ 
        babelHelpers: 'bundled',   
        configFile: path.resolve(__dirname, 'babel.config.js')
      })
    ]
  }
];
