FROM mongo:4.2

#Workdir configs directory
RUN mkdir -p /app
WORKDIR /app

# Copy config files
COPY initShard1.js .
COPY setupShard1.sh .

EXPOSE 27017

# Finally run this script
RUN ["chmod", "+x", "./setupShard1.sh"]
CMD []

