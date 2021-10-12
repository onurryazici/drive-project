FROM node:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN apt-get update 
EXPOSE 22
CMD ["npm", "run", "start"]