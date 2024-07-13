FROM node:21.7.0

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD npm start