import React, { useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

interface VideoCardProps {
  src: string;
  title: string;
  image: string;
  username: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, image, username }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const maxLeng = 100

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
    <div className="w-[280px] mx-auto my-3 h-[500px] relative overflow-hidden rounded-3xl">
      <video
        ref={videoRef}
        src={src}
        className="w-[280px] bg-contain overflow-hidden object-cover h-[500px] bg-center  rounded-3xl bg-[#00000076]"
      />


      <div onClick={toggleVideo} className={`cursor-pointer player-controls flex items-center justify-between  flex-col w-full h-full text-white absolute left-0 bottom-0 z-10 px-6 py-6 ${isPlaying ? " bg-transparent" : " bg-[#00000076]"}`}>
        <div className="h-[18%]"></div>
        <button className="cursor-pointer" onClick={toggleVideo}>
          {isPlaying ? " " : <IoPlayCircleOutline className='text-5xl'
            onClick={toggleVideo} />}
        </button>
        <div className="flex flex-col">

          <div className="flex items-center justify-start gap-3">

            <img className='w-8 h-8 rounded-full' src={image} alt={title} />
            <p className='text-[12px] font-medium'>{username}</p>
          </div>
          <p className='text-[12px] my-2'>{title.length >= maxLeng ? title.slice(0, maxLeng) + "..." : title}</p>
        </div>


      </div>
    </div>
  );
};

export default VideoCard;
