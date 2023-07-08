# Base image for React
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy all project files into the container
COPY . .



# Open port for the React application
EXPOSE 3000

# Run the React application
CMD ["npm", "start"]