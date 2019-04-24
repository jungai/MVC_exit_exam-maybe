FROM node:10-alpine
WORKDIR /usr/

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

EXPOSE 3000

CMD yarn start
