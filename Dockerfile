# Set the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install @angular/cli
RUN npm install -g @angular/cli

# Copy the rest of the app's files to the container
COPY . .

# Build the Angular app
RUN ng build --configuration=production

# Expose the port that the app runs on (default is 4200 for Angular apps)
EXPOSE 4200

# Start the app
CMD ["ng", "serve", "--proxy-config", "proxy.conf.json",  "--host", "0.0.0.0"]