// const express = require("express");
// const app = express();
// const port = 5000;
// const dbConnect = require("./dbConnect");
// app.get("/", (req, res) => res.send("Hello worlds!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}`));

const express = require("express");
const connectDB = require("./dbConnect"); // Adjust the path as necessary

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define a simple route
app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
