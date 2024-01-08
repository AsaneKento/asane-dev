FROM node:20.10.0-slim

WORKDIR /production

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY . .
CMD npm run panda
CMD npm run build
CMD npm run start
