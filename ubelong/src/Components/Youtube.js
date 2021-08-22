import axios from "axios";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";


const Youtube = () => {
    const [video, setVideo] = useState([]);

    const fetchVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=50&key=${process.env.REACT_APP_API_KEY}&q=motivational+video`);
            setVideo(res.data.items)
        } catch (error) {
            console.log(`In the catch`, error)
        }
    };

    useEffect(() => {
        fetchVideo();
    }, []);

    const randomVideo = () => {
        const vidArr = video.map(vid => {
            return vid.id.videoId
        });
        const randVid = vidArr[Math.floor(Math.random() * vidArr.length)];
        return randVid
    };

    const motivationalVid = randomVideo();
    
    return (
        <div>
        <YouTube videoId={motivationalVid} />
        </div>
    )
};

export default Youtube
