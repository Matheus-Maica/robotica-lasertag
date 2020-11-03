const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()
app.use(express.static(path.join(__dirname, "./public")));
app.get("*", async (req, res) => res.sendFile(__dirname + "/public/home.html"))
app.listen(process.env.PORT)