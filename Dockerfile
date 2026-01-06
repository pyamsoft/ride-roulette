FROM node:24-slim

WORKDIR /ride-roulette

# Permissive umask
RUN umask 0022

# Copy src files
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY eslint.config.mjs ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY public ./public
COPY src ./src
COPY index.html ./

# Create output directory, Build project
RUN mkdir -p /output && corepack enable && pnpm install && pnpm run build

# Copy to export directory by default
CMD [ "cp", "-r", "dist", "/output" ]
