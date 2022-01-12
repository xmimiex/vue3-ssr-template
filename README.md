# vue3-ssr-template

[![vue 3](https://img.shields.io/static/v1?label=vue3&message=ssr&color=green)](https://github.com/vuejs/vue-next)
![prod ready](https://img.shields.io/static/v1?label=production&message=ready&color=green)
![license](https://img.shields.io/badge/license-MIT-blue)

## About

This template is a prod ready starter for your Vue SSR application where you can do what you want at any level, client or server side. It follows the official [Vue SSR Guide](https://v3.vuejs.org/guide/ssr.html) and uses officials Vue dependencies needed for a large scale-up project regarding SEO, Internationalization.

## Technologies

| Basics                                                 | Tooling                                               |
| :----------------------------------------------------- | :---------------------------------------------------- |
| [vue 3](https://github.com/vuejs/vue-next)             | [storybook](https://github.com/storybookjs/storybook) |
| [vue-router](https://github.com/vuejs/vue-router-next) | [webpack 5](https://github.com/webpack/webpack)       |
| [vue-i18n](https://github.com/intlify/vue-i18n-next)   | [vite](https://github.com/vitejs/vite)                |
| [pinia](https://github.com/vuejs/pinia)                | [babel](https://babeljs.io/)                          |
| [typescript](https://github.com/Microsoft/TypeScript)  | [eslint](https://www.npmjs.com/package/eslint)        |
| [sass](https://github.com/sass/dart-sass)              | [stylelint](https://www.npmjs.com/package/stylelint)  |
| [koa](https://github.com/koajs/koa)                    | [husky](https://typicode.github.io/husky/)            |

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

> Then build & start Docker image

```
yarn docker:build
yarn docker:run
```

By default, application runs with the config file production.yml (an alias to the one from the config folder)

> Or simply start application

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

[<img src="https://avatars.githubusercontent.com/u/21689610?v=4" alt="jcfauchet" width="75"/>](https://github.com/jcfauchet)
[<img src="https://avatars.githubusercontent.com/u/11555372?v=4" alt="mrzdevcore" width="75"/>](https://github.com/mrzdevcore)
