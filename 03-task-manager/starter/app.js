const express = require("express");
const app = express();
const _PORT = 3000;
const { connectDB } = require("./db/connect");

require("dotenv").config();
const { NotFound } = require("./middleware/not-found");
// ENV File !

// Imports !

const tasks = require("./routes/task");

// middleware

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/task", tasks);

//Custom 404  Route !

app.use(NotFound);

// Connecting to DB

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(_PORT, () => {
      console.log("Server is Listening to the por 3000...");
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't connect to DB Please Check !'");
  }
};

start();
