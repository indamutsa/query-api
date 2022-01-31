FROM mongo:4.2

#Workdir configs directory
RUN mkdir -p /app
WORKDIR /app

# Copy config files
COPY initShard2.js .
COPY setupShard2.sh .

EXPOSE 27017

# Finally run this script
RUN ["chmod", "+x", "./setupShard2.sh"]
CMD []

