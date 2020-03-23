FROM node:12-alpine

WORKDIR /app

COPY ./src ./src
COPY package.json .

RUN npm install --only=production

ENV PORT=3000
ENV GCP_PROJECT_ID=poc-gcp-node
ENV GCP_BUCKET_NAME=bucket-test-node

EXPOSE $PORT
CMD ["npm", "run", "start"]
