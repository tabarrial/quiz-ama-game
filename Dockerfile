FROM node:10-alpine
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app && apk add curl
WORKDIR /home/node/app
COPY quiz-ama-game/ /home/node/app
USER node
RUN npm install
EXPOSE 8080 8000
CMD [ "npm", "start" ]
