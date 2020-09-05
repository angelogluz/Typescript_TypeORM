FROM node:12-alpine

WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

COPY . .

CMD npm run dev
