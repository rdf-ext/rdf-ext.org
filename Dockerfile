FROM node:16 AS builder

RUN mkdir -p /build
WORKDIR /build
COPY package*.json .
COPY src src
RUN npm ci && npm run build

FROM nginx:1.20-alpine

COPY --from=builder /build/dist /usr/share/nginx/html/
