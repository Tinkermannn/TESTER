require("dotenv").config();

const userRoutes = require('./src/routes/UserRoute');
const courseRoutes = require('./src/routes/CourseRoute');
const studentRoutes = require('./src/routes/StudentRoute');
const courseRegRoutes = require('./src/routes/CourseRegRoute');
const lecturerRoutes = require('./src/routes/LecturerRoute');

const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');

const port = process.env.PORT;
const app = express();


// connect to database
db.connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
);


// status
app.get('/status', (req, res) => {
    res.status(200).send({ status: "Server is running" });
})

app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/course/regist", courseRegRoutes);
app.use("/student", studentRoutes);
app.use("/lecturer", lecturerRoutes);


app.listen(port, () => {
    console.log(`🚀 Server is running on PORT ${port}`);
})