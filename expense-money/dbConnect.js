// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://eymm:rootroot@cluster0.yzitzp1.mongodb.net/", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// connection = mongoose.connection;

// connection.on("error", (err) => console.log(err));

// connection.on("connected", () =>
//   console.log("Mongo DB Connection Successfull")
// );

// dbConnect.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eymm:rootroot@cluster0.yzitzp1.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
