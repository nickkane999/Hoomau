### Node setup

yarn init -y
yarn add -D babel-watch
yarn add @babel/core @babel/polyfill @babel/preset-env babel-plugin-module-resolver
yarn add mongoose express ejs body-parser

# Add file to root folder

// File
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
],
};

# create Docker file

// File
FROM node:14-slim

COPY . /opt/app

WORKDIR /opt/app

RUN yarn

CMD yarn watch

# Add to package file:

"scripts": {
"watch": "babel-watch -L src/index.js"
},

### GraphQL Apollo setup

yarn add @babel/core @babel/polyfill @babel/preset-env apollo-server apollo-server-express babel-plugin-module-resolver cookie-parser cors express graphql
copy of babel.config.js (same as api-server folder)
copy docker file (same as api-server folder)
copy script instructions for json file (same as api-server folder)
copy src/index.js file (same as api-server folder)


## To watch learning video

https://www.youtube.com/watch?v=xUQ-hNRHCgs (16:38 timestamp)