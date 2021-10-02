module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./",
        },
      },
    ],
    ["styled-components", { ssr: true }],
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
    ["@babel/preset-typescript"],
  ],
};
