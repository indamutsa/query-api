FROM mongo:4.2

#Workdir configs directory
RUN mkdir -p /app
WORKDIR /app

# Copy config files
COPY addShards.js .
COPY setupRouter.sh .

EXPOSE 27017

# Finally run this script
RUN ["chmod", "+x", "./setupRouter.sh"]
CMD []