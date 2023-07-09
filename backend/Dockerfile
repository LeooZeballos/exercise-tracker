# Stage 1: Copy the backend code
FROM node:14 as backend-builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy backend source code
COPY . .

# Stage 2: Run the backend
FROM node:14-alpine

WORKDIR /app

# Copy the backend code from the previous stage
COPY --from=backend-builder /app /app

# Expose the port on which your backend runs (change as per your application)
EXPOSE 3000

# Start the backend
CMD ["node", "server.js"]
