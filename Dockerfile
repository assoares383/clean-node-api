FROM node:16
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN yarn add --only=prod
COPY ./dist ./dist
EXPOSE 9001
CMD yarn start
