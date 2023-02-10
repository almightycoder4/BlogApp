//require("dotenv").config();
const express = require("express");
//const jwt = process.env.JWT_SECRET_KEY;
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database/connectDB");
const authRouter = require("./routes/authroutes");
const postRouter = require("./routes/postroutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/", authRouter);
app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Blog Server Online...");
});
const port = process.argv[2] || 3035;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
  });
});
