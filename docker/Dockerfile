# LABEL repository="https://github.com/sk0x0y/kurlyapp"
# LABEL maintainer="sk0x0y <seokyeong.yang@kakao.com>"

FROM node:lts-alpine

WORKDIR /app

COPY .. .

RUN yarn install
RUN yarn add sharp
RUN yarn nextjs:build

EXPOSE 3000

CMD ["yarn", "nextjs:start"]
