const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routes/contact.route.js");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Chào mừng Trương Huệ Thanh đến với ứng dụng sổ liên lạc !"});
});
app.use("/api/cpntacts", contactsRouter);
module.exports = app;
