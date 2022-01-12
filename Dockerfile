FROM node:16.13.1-alpine3.15

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY dist ./dist

RUN yarn install --production --frozen-lockfile

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD [ "yarn", "serve:prod" ]
