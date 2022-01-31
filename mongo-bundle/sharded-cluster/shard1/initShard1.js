rsconf = {
  _id: "shard1rs",
  members: [
    { _id: 0, host: "shard1svr1:27017" },
    { _id: 1, host: "shard1svr2:27017" },
    { _id: 2, host: "shard1svr3:27017" },
  ],
};

// Initiate the replicaset
rs.initiate(rsconf);

// Initiate the config from mongo-rs0-1 conf file
rs.conf();
