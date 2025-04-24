// components/chatbot/VideoMessage.jsx

const VideoMessage = ({ videos }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-4">
      {videos.map((video, index) => (
        <a
        key={index}
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-[200] min-h-[150] h-full bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
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
  