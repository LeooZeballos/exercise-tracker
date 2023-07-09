# Stage 1: Build React app
FROM node:14 as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy app source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Deploy the app using NGINX
FROM nginx:1.21-alpine

# Copy the build output from the previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default HTTP port
EXPOSE 80

# Copy the .env file to the container
COPY .env /usr/share/nginx/html/.env

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
