# Base image for json-server
FROM clue/json-server

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY alina/package*.json ./

# Install project dependencies
RUN npm install

# Install json-server globally
RUN npm install -g json-server

# Copy all project files into the container
COPY . .

# Open port for json-server
EXPOSE 4000

# Run the json-server command when the container starts
CMD ["json-server", "-H", "0.0.0.0", "-p", "4000", "-w", "/data/src/FakeRestApi.json"]
