FROM node:10

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy source files from host computer to the container
COPY ./auth .
COPY ./proto ./proto
#ADD proto proto

# Specify port app runs on
EXPOSE 8081

RUN /app/node_modules/typescript/bin/tsc  --project /app/tsconfig.json

# Run the app
CMD [ "npm", "start" ]