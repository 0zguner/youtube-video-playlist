import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const isProd = process.env.NODE_ENV == "production";

const plugins = [
  resolve({
    browser: true
  }),
  commonjs(),
  typescript({ cacheRoot: require("unique-temp-dir")() }),
  // Default options
  serve({
    // Launch in browser (default: false)
    open: true,
    // Show server address in console (default: true)
    verbose: false,

    // Folder to serve files from
    contentBase: "",

    // Multiple folders to serve from
    contentBase: ["dist", "pages"],

    // Options used in setting up server
    host: "localhost",
    port: 10001
  }),
  livereload()
];

if (isProd) {
  plugins.push(terser());
}

const tasks = [
  {
    input: "src/main.ts",
    output: {
      name: "playlist",
      file: "dist/main.js",
      format: "umd",
      exports: "named",
      sourcemap: true
    },
    plugins
  }
];

export default tasks;
