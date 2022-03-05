# Project setup

```
yarn install
```

## Compiles and hot-reloads for development

```
yarn serve:dev
```

Vite is used to serve the application in "dev-server" mode.

## Compiles and minifies for production

```
yarn build
```

This script builds :

- application : client part and server part (built by Webpack 5)
- nodejs server : ssr part (built by tsc)

> Then build & start Docker image

```
yarn build:docker
yarn serve:docker
```

By default, application runs with the config file production.yml (an alias to the one from the config folder)

> Or simply start application

```
yarn serve:prod
```

## Run your unit tests

```
yarn test
```

## Lints and fixes files

```
yarn lint
```

## Analyze bundle resources

```
yarn analyz
```

## Compiles Storybook and hot-reloads for development

```
yarn serve:storybook
```

## Compiles Storybook for production

```
yarn build:storybook
```

## Debug application

Build application then start it in production mode "debug"

```
yarn build
yarn serve:prod-debug
```

Execute some requests to application to observe memory usage of NodeJS server

```
ab -n 10000 -c 100 -k http://localhost:3000/
```

## Upgrade dependencies

```
yarn upgrade-interactive --latest
```