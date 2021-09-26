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
  ],
};
