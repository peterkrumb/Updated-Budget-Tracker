const path = require("path");
const webpack = require("webpack");

const config = {
    
    entry: {
        db: "./src/db",
    index: "./src/index",
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    mode: "development",
   
  };
  
  module.exports = config;