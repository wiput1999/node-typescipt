FROM node:12-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:12-alpine

WORKDIR /app

COPY --from=builder /app/build/ .

EXPOSE 5000

CMD ["node", "index.js"]