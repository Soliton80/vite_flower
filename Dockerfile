FROM node:18-alpine3.18
WORKDIR /app
COPY package.json . 
RUN npm i 
COPY . . 
EXPOSE 4420
RUN npm run build
CMD ["npm", "run", "preview"]