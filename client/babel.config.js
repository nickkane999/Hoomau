module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./src",
        },
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
    ["next/babel"],
  ],
};
