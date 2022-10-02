FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT_NUM=8080

EXPOSE 8080

CMD ["npm", "run", "start"]