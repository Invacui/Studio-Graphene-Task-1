// db.js

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Anasdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Database connection error:", error);
});

db.once("open", () => {
  console.log("Database connection successful");
});

module.exports = mongoose;
