FROM node:16.17-alpine3.15

EXPOSE 3000

RUN npm install -g serve

RUN mkdir /app
WORKDIR /app

COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]