FROM node:14.14.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
COPY . .
RUN npm i
ARG HOST_NAME
ENV REACT_APP_HOST_NAME=$HOST_NAME
CMD ["npm","run","start"]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html