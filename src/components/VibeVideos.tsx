import { BsArrowUpRight } from 'react-icons/bs'
import videop from '../assets/videos/tempvideo.mp4'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { useRef, useState } from "react";
import VideoCard from './site/VideoCard';

function VibeVideos() {
    const maxLeng = 100
    const videos = [
        {
            title: "Sing for the moment - Eminem Lorem ipsum dolor sit, amet consectetur adipisicing.",
            url: videop,
            image: "https://picsum.photos/200/300",
            username: "Pulbox_uz"

        },
        {
            title: "Him and I - G-eazy ft. Halsey  Lorem ipsum dolor sit",
            url: videop,
            image: "https://picsum.photos/200/300",
            username: "Pulbox_uz"
        },
        {
            title: "The search - NF Lorem Lorem ipsum dolor sit, amet consectetur adipisicing.",
            url: videop,
            image: "https://picsum.photos/200/300",
            username: "Pulbox_uz"
        },
        {
            title: "Him and I - G-eazy ft. Halsey  Lorem ipsum dolor sit, amet consectetur adipisicing.",
            url: videop,
            image: "https://picsum.photos/200/300",
            username: "Pulbox_uz"
        }]
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className='max-w-[1440px] py-14 w-full flex-col mx-auto flex items-center justify-between'>
            <div className="flex my-12 justify-between w-full">
                <h3 className='font-bold text-3xl'>Vibe Videos</h3>
                <a href="#" className='flex text-lg font-medium items-center justify-center text-[#17BE86]'>Instagramda ko'rish <BsArrowUpRight /></a>
            </div>
            <div className="flex w-full items-center justify-between flex-wrap ">
                {videos.map((video) => (
                    <VideoCard
                        image={video.image}
                        src={video.url}
                        title={video.title}
                        username={video.username} />


                ))}
            </div>
        </div>
    )
}

export default VibeVideos