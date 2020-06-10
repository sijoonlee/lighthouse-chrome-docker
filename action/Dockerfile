FROM sijoonlee/lighthouse-with-chrome
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN pwd && ls -al
RUN ls -al github/workspace 
ENTRYPOINT ["/entrypoint.sh"]