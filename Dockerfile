FROM node:18 AS builder

RUN mkdir -p /build
WORKDIR /build
COPY package*.json .
COPY src src
COPY templates templates
RUN npm ci && npm run build

FROM nginx:1.25-alpine

COPY --from=builder /build/dist /usr/share/nginx/html/
