const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up route
const listItemRoute = require("./routes/listItemRoute");
app.use("/list", listItemRoute);

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Database connected! 🎉"))
    .catch((error) => console.log(error, "Database did not connect! ☹️❌"));

app.listen(3001, () => console.log("The server is listening at port 3001 👽"));
