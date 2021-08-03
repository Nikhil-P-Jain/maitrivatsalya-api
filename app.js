require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors');

const publicDir = require('path').join(__dirname,'./api/uploads');

app.use("/api/uploads",express.static(publicDir));

const fileRouter = require("./api/fileUpload/fileUpload.service");
const bannerRouter= require("./api/banner/banner.router");
const counterRouter= require("./api/counter/counter.router");
const inspireRouter= require("./api/inspire/inspire.router");
const aboutRouter= require("./api/aboutus/aboutus.router");
const activityRouter= require("./api/latest_activities/activities.router");
const storyRouter= require("./api/story/story.router");
const folderRouter= require("./api/folder/folder.router");
const subfolderRouter= require("./api/subfolder/subfolder.router");
const visionRouter= require("./api/vision/vision.router");
const videosRouter= require("./api/videos/videos.router");
const bookRouter= require("./api/book/book.router");

app.use(express.json());
app.use(cors());

app.use("/api/upload" , fileRouter);
app.use("/api/banner",bannerRouter);
app.use("/api/counter", counterRouter);
app.use("/api/inspire", inspireRouter);
app.use("/api/aboutus",aboutRouter);
app.use("/api/activities",activityRouter);
app.use("/api/story",storyRouter);
app.use("/api/folder",folderRouter);
app.use("/api/subfolder",subfolderRouter);
app.use("/api/vision",visionRouter);
app.use("/api/videos",videosRouter);
app.use("/api/book",bookRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running ON PORT" , process.env.APP_PORT);
})
