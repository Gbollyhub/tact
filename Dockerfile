# Dockerfile
FROM node:16.20.2-alpine

# create destination directory
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV STRAPI_URL=https://cms.tokunboabiru.org/api

CMD [ "npm", "start" ]