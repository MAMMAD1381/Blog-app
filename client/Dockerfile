# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the client application files to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 5001

# Define the command to run the application
CMD ["npm", "start"]
