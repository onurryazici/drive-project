FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm install
ARG HOST_NAME
ENV REACT_APP_HOST_NAME=$HOST_NAME
RUN npm i
CMD ["npm", "run", "start"]