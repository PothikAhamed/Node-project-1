require('dotenv').config()
const dns = require('dns')
dns.setServers(["1.1.1.1", "8.8.8.8"])
const express = require('express');
const router = require('./router');
const dbConnect = require('./config/db');
const app = express()

dbConnect()
app.use(express.json())
app.use("/", router)

module.exports = app;