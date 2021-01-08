// const fs = require("fs");
// const path = "../data.json";

// class Video{
//     readData = () => {
//         return new Promise((resolve, reject) => {
//             fs.readFile(path, "utf-8", (error, data) => {
//                 resolve(JSON.parse(data));
//             });
//         });
//     };
//     getVideos = () =>{
//         return this.readData();
//     };
//     getVideoById = async(videoId) => {
//         const data = await this.readData();
//         return data.videos.find((video)=>video.id == videoId);
//     };
// }
// module.exports = Video;