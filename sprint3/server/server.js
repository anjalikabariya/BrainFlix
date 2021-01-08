const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const videoData = require('./data.json');
// const VideoDetails = new Video();

app.get("/", (req, res) => {
    res.send("server started on port 8080");
});

app.get("/videos", (req, res) => {
    res.status(200).send(videoData);
})

app.get("/videos/:id", (req, res) => {
    let videosId = req.params.id;
    let currVideo = videoData.videos.find((video)=>video.id === videosId);
    res.status(200).send(currVideo);
})

app.post("/videos", (req, res) =>{
    videoData.videos.push(req.body);
    res.send(videoData.videos);
});

app.listen(8080, () => console.log("server started on http://localhost:8080"));