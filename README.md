# vue3-ssr-template
[![vue 3](https://img.shields.io/static/v1?label=vue3&message=ssr&color=green)](https://github.com/vuejs/vue-next)
![prod ready](https://img.shields.io/static/v1?label=production&message=ready&color=green)
![license](https://img.shields.io/badge/license-MIT-blue)
## About

No need to waste your time waiting Nuxt to be stable for using Vue 3, just clone this repository and find a true prod-ready SSR application where you can do what you want at any level, client or server side.

## Technologies

- [vue 3](https://github.com/vuejs/vue-next)
- [vue-router](https://github.com/vuejs/vue-router-next)
- [pinia](https://github.com/vuejs/pinia)
- [vue-i18n](https://github.com/intlify/vue-i18n-next)
- [head](https://github.com/vueuse/head)
- [typescript](https://github.com/Microsoft/TypeScript)
- [sass](https://github.com/sass/dart-sass)
- [koa](https://github.com/koajs/koa)


- [storybook](https://github.com/storybookjs/storybook)
- [webpack 5](https://github.com/webpack/webpack)
- [vite](https://github.com/vitejs/vite)


- [eslint](https://www.npmjs.com/package/eslint)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [jest](https://github.com/facebook/jest)
- [babel](https://babeljs.io/)
- [husky](https://typicode.github.io/husky/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn ssr:dev
```
Vite is used to serve the application in "dev-server" mode.

### Compiles and minifies for production
```
yarn build
```
This script builds : 
- application : client part and server part (built by Webpack 5)
- nodejs server : ssr part (built by tsc)

Then start application
```
yarn ssr:serve
```

### Run your unit tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Analyze bundle resources
```
yarn analyz
```

### Compiles Storybook and hot-reloads for development
```
yarn storybook:dev
```

### Compiles Storybook for production
```
yarn storybook:build
```

## Special thanks 💚

[<img src="https://avatars.githubusercontent.com/u/21689610?v=4" alt="jcfauchet" width="100"/>](https://github.com/jcfauchet)
[<img src="https://avatars.githubusercontent.com/u/11555372?v=4" alt="mrzdevcore" width="100"/>](https://github.com/mrzdevcore)
