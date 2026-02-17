function VibeVideos() {
    const videos = [
        {
            title: "Video 1",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Video 2",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Video 3",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Video 4",
            url: "https://www.instagram.com/reels/DUxvS3MDGxp/"
        }]
    return (
        <div>
            {videos.map((video) => (
                <div key={video.title}>
                    <h2>{video.title}</h2>
                    <iframe src={video.url} title={video.title} />
                </div>
            ))}
        </div>
    )
}

export default VibeVideos