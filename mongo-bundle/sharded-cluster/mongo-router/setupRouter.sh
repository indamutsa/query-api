#!/bin/bash
echo ******************************************
echo Starting the config server [Sharded cluster]....
echo ******************************************

# # Wait 10 second and then sleep
sleep 5 | echo Sleeping --- 5 secs

# Run the the replicaset
# mongo mongodb://mongo-rs0-1:27017 replicaSet.js
mongo mongodb://mongos:27017 < addShards.js