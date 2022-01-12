FROM node:16.13.1-alpine3.15

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY dist/app ./dist/app
COPY dist/server ./dist/server

RUN yarn install --frozen-lockfile

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD [ "yarn", "run", "ssr:serve" ]
