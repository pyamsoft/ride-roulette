FROM node:16-slim

WORKDIR /ride-roulette

RUN umask 0022

COPY package.json ./
COPY yarn.lock ./

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

COPY src ./src
COPY index.html ./
COPY .eslintrc.cjs ./

RUN yarn && yarn run build

RUN mkdir -p /output

CMD [ "cp", "-r", "dist", "/output" ]
