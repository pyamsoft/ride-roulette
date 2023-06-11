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

COPY .firebaserc ./
COPY firebase.json ./

RUN mkdir -p ${HOME}/.config/configstore
COPY .firebase-tools.json ./
RUN mv ./.firebase-tools.json ${HOME}/.config/configstore/firebase-tools.json

RUN yarn

CMD [ "yarn", "run deploy" ]
