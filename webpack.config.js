/* global __dirname, require, module*/

const webpack = require("webpack");
const path = require("path");
const yargs = require("yargs");
const env = yargs.argv.env; // use --env with webpack 2
const pkg = require("./package.json");

let libraryName = pkg.name;

let outputFile, mode;

if (env === "build") {
  mode = "production";
  outputFile = libraryName + ".min.js";
} else {
  mode = "development";
  outputFile = libraryName + ".js";
}

const config = {
  mode: mode,
  target: 'node',
  entry: __dirname + "/src/index.ts",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

module.exports = config;
