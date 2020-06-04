FROM sijoonlee/lighthouse-with-chrome
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN pwd && ls -l
ENTRYPOINT ["/entrypoint.sh"]
