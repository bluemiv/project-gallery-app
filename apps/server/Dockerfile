FROM node:16.17-alpine3.15

EXPOSE 4000

RUN mkdir /server
WORKDIR /server

COPY package.json ./
RUN npm install

COPY ./.env.local ./.env.prod
COPY ./build ./build

ENTRYPOINT ["node", "./build/index.js"]