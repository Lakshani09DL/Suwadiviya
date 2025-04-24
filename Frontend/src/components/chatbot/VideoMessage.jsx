// components/chatbot/VideoMessage.jsx
const VideoMessage = ({ videos }) => {
    return (
      <div className="flex overflow-x-auto space-x-4 p-2 mb-4 scrollbar-thin scrollbar-thumb-gray-300">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] flex-shrink-0 bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-sm font-medium">{video.title}</div>
          </a>
        ))}
      </div>
    );
  };
  
  export default VideoMessage;
  