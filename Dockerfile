# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Install all dependencies of the current project.
RUN npm install && npm install sweetalert-react && npm install -g serve && chmod 777 startup.sh

CMD ./startup.sh

EXPOSE 5000