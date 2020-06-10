FROM sijoonlee/lighthouse-with-chrome
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN cp ../app .
RUN pwd && ls -al 
ENTRYPOINT ["/entrypoint.sh"]