FROM node:18-alpine

RUN apk add g++ make py3-pip

WORKDIR /app/

COPY ./ /app/
RUN apk add --no-cache git
RUN npm install -g npm@9.7.2
RUN npm install -g node-gyp
RUN npm upgrade --save --legacy-peer-deps
RUN npm install

# FROM mysql:8.0-debian

# COPY my.cnf /etc/mysql/conf.d/my.cnf

# RUN apt-get update && apt-get install -y locales \
#   && sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen \
#   && locale-gen \
#   && update-locale LANG=ja_JP.UTF-8