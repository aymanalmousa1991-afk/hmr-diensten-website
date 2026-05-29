# Dockerfile voor HMR DIENSTEN API op Fly.io
FROM node:20-alpine

WORKDIR /app

# Installeer dependencies
COPY package*.json ./
RUN npm install --production

# Kopieer code
COPY index.js ./

# Poort
EXPOSE 3001

# Start
CMD ["node", "index.js"]
