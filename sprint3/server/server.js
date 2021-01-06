const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

const upload = require('./data.json');
const Video = require('./model/videos.js');
const VideoDetails = new Video();

app.get("/", (req, res) => {
    res.send("server started on port 8080");
});

app.get("/videos", async (req, res) => {
    const videos = await VideoDetails.getVideos();
    res.status(200).json(videos);
})

app.get("/videos/:id", async (req, res) => {
    const videos = await VideoDetails.getVideoById(req.params["id"]);
    res.status(200).json(videos);
})

app.post("/videos", (req, res) =>{
    upload.videos.push(req.body);
    res.send(upload.videos);
});

app.listen(8080, () => console.log("server started on http://localhost:8080"));