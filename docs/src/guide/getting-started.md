# Setup

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