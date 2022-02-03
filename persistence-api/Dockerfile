FROM node:14.18.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN yarn

EXPOSE 3200

CMD ["npm", "run","start"]