FROM node:10

WORKDIR /notifications

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

RUN /notifications/node_modules/typescript/bin/tsc  --project /notifications/tsconfig.json

CMD [ "npm", "start" ]