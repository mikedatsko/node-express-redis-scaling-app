FROM node:latest

RUN mkdir /app
COPY ./package.json /app
COPY ./yarn.lock /app
WORKDIR /app
RUN rm -rf node_modules
RUN yarn install
