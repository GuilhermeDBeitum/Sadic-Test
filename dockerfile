FROM node:12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @vue/cli
RUN npm i axios
RUN npm i express
RUN npm i sqlite3
RUN npm i jsonwebtoken
COPY . .

EXPOSE 8080