const path = require("path");

const config = {
  mode: "development",
  entry: {
    // vendor: ["@babel/polyfill", "react"], // Third party libraries
    // app: ["./src/client/index.js"]
    bundle: ["./src/client/index.js", "@babel/polyfill", "react"]
    /// Every pages entry point should be mentioned here
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js" // names of the bundle file will be name of the entry files (mentioned above)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader", // asks bundler to use babel loader to transpile es2015 code
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  },
};

module.exports = config;
