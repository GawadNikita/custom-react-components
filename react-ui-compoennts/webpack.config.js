const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "YourLibraryName",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        // test: /\.(ts|tsx)$/,
        test: /\.(ts)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
