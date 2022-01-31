# Removing Previous resources
docker-compose -f config-server/docker-compose.yaml down -v
docker-compose -f shard1/docker-compose.yaml down -v
docker-compose -f shard2/docker-compose.yaml down -v
docker-compose -f mongo-router/docker-compose.yaml down -v


# Setting up config servers
# ###########################

# Initiating config servers (3 member replicaset)
docker-compose -f config-server/docker-compose.yaml up -d --build --force-recreate
# sleep 5
# Initiating the replica set
# mongo mongodb://192.168.1.74:40001 initConfig.js

# ------------------------------------------------

# # Starting 1 shard replica set
# ##############################

docker-compose -f shard1/docker-compose.yaml up -d --build --force-recreate
# sleep 5
# Initiate the replica set
# mongo mongodb://192.168.1.74:50001 initShard1.js


# Starting 2 shard replica set
# ############################
docker-compose -f shard2/docker-compose.yaml up -d --build --force-recreate
# sleep 5
# # Initiate the replica set
# mongo mongodb://192.168.1.74:50004 initShard2.js


# # Setting the Query Router
# ##########################
# docker-compose -f mongo-router/docker-compose.yaml up -d --build --force-recreate
# sleep 3
# # Adding shards to the query router
# mongo mongodb://192.168.1.74:60000 < addShards.js
