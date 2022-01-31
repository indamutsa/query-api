rsconf = {
  _id: "cfgrs",
  configsvr: true,
  members: [
    { _id: 0, host: "cfgsvr1:27017" },
    { _id: 1, host: "cfgsvr2:27017" },
    { _id: 2, host: "cfgsvr3:27017" },
  ],
};

// Initiate the replicaset
rs.initiate(rsconf);

// Initiate the config from mongo-rs0-1 conf file
rs.conf();
