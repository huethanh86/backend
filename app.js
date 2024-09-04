const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error.js");
const app = express();
const contactsRouter = require("./app/routes/contact.route.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Chào mừng Trương Huệ Thanh đến với ứng dụng sổ liên lạc !" });
});

app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Không tìm thấy tài nguyên"));
});

// error-handling middleware
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Lỗi máy chủ nội bộ",
    });
});

module.exports = app;