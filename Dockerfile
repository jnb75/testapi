FROM node:15.14.0

ENV ENV_NODE=development

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["node", "app.js"]