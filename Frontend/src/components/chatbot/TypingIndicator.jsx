// components/TypingIndicator.jsx
import Avatar from './Avatar';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <Avatar sender="bot" />
      <div className="bg-white text-gray-800 px-4 py-3 rounded-lg rounded-bl-none shadow-sm border border-gray-200">
        <div className="flex space-x-1">
          <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;