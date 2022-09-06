From node:alpine
Workdir /app
Copy package*.json .
Run npm install
Copy . .
Expose 3000
CMD ["node", "index.js"]
