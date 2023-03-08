FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn nextjs:build

EXPOSE 3000

CMD ["yarn", "nextjs:start"]
