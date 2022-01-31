db.getSiblingDB("demo");

// Create collections
db.createCollection("movie");
db.createCollection("movie2");

// Create Index
db.movie.createIndex({ title: "hashed" });

// Enable shard on the db
sh.enableSharding("demo");

// Shard collections
sh.shardCollection("demo.movie", { title: "hashed" });

// Insert data
for (var i = 1; i <= 25; i++) {
  db.movie.insert({ title: `Movie ${i}`, released: 1990 + i });
}
