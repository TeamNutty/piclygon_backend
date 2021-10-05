// create model
// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

// import
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute");

// middleware
app.use(cors());

app.use(express.json());

app.use("/", authRoute);

app.use((err, req, res, next) => {
    res.status(400).send({ message: err });
});

// runningport
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
