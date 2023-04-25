FROM node:16.14.2
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install --production --legacy-peer-deps
COPY ./dist ./dist
EXPOSE 9001
CMD npm start
