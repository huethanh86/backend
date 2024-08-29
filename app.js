const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Chào mừng Trương Huệ Thanh đến với ứng dụng sổ liên lạc !"});
});
module.exports = app;
