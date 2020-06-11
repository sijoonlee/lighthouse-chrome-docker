FROM sijoonlee/lighthouse-with-chrome
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN cd /github/workspace/webserver
RUN npm install && npm run start
ENTRYPOINT ["/entrypoint.sh"]