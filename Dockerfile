# Build do React
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Servir com NGINX
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
