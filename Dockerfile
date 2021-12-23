FROM node:16.10-alpine3.14

WORKDIR /root

ADD package.json package.json
ADD package-lock.json package-lock.json
ADD .babelrc .babelrc
ADD webpack.config.js webpack.config.js
RUN npm install

ADD src src
RUN npm run prod:build:client

EXPOSE 3000
CMD ["npm", "start"]
