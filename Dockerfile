FROM node:18-slim

WORKDIR /ride-roulette

RUN umask 0022

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

COPY public ./public
COPY src ./src
COPY index.html ./
COPY .eslintrc.cjs ./

# Enable corepack
RUN corepack enable

# Build
RUN yarn && yarn run build

# Output
RUN mkdir -p /output

# Copy to export directory by default
CMD [ "cp", "-r", "dist", "/output" ]
