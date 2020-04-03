FROM node:10

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files from host computer to the container
COPY . .

# Specify port app runs on
EXPOSE 8080

# Run the app
CMD [ "npm", "start", ">logs.txt" ]