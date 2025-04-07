// components/Avatar.jsx
const Avatar = ({ sender }) => {
    const isUser = sender === 'user';
    
    return (
      <div 
        className={`w-9 h-9 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-600 ml-2' : 'bg-blue-100 mr-2'
        } mt-1`}
      >
        <span className={`text-sm font-bold ${isUser ? 'text-white' : 'text-blue-600'}`}>
          {isUser ? 'You' : 'AI'}
        </span>
      </div>
    );
  };
  
  export default Avatar;