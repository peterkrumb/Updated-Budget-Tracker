const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const config = {
    
    entry: {
        db: "./public/db.js",
    index: "./public/index.js",
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    mode: "development",
   
  };
  
  module.exports = config;