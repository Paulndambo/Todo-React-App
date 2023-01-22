FROM node:alpine
WORKDIR /app
COPY package*.json .

#RUN npm install -g npm@9.3.1
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]