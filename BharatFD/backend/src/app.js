const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { connectRedis } = require("./config/redis");
const faqRoutes = require("./routes/faqRoutes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", faqRoutes);

connectDB();
connectRedis();

module.exports = app;
