FROM node:alpine
WORKDIR /app
#COPY package*.json .
COPY . .

#RUN npm install -g npm@9.3.1
RUN npm install



EXPOSE 3000

CMD ["npm", "start"]