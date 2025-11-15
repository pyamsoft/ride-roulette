FROM node:24-slim

WORKDIR /ride-roulette

RUN umask 0022

COPY package.json ./
COPY pnpm-lock.yaml ./

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

COPY public ./public
COPY src ./src
COPY index.html ./
COPY eslint.config.mjs ./

# Enable corepack
RUN corepack enable

# Build
RUN pnpm install && pnpm run build

# Output
RUN mkdir -p /output

# Copy to export directory by default
CMD [ "cp", "-r", "dist", "/output" ]
