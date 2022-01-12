# Project setup

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
