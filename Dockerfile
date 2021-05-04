# BASE
FROM node:14-buster-slim AS base

RUN apt-get update && apt-get install --no-install-recommends --yes openssl

WORKDIR /app

# RUNNER

FROM base AS runner

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production --pure-lockfile
COPY ./src ./src

CMD yarn start
