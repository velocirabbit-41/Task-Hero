FROM node

# ENV NODE_ENV=production

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . . 

COPY .env .env

EXPOSE 80

CMD [ "npm", "run", "dev" ]