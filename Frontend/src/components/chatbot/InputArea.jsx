// components/InputArea.jsx
import { useState, useRef, useEffect } from 'react';

const InputArea = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const [showMap, setShowMap] = useState(false);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
          {/* Map Button */}
          {/* Enhanced Map Button */}
<button
  onClick={() => setShowMap(true)}
  className="px-4 py-2 flex items-center gap-2 bg-white hover:bg-blue-100 border border-gray-300 rounded-md shadow-sm transition-all duration-200"
  aria-label="Show map"
>
  <svg
    className="w-5 h-5 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 9s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z"
    />
  </svg>
  <span className="text-sm text-blue-700 font-medium">Map</span>
</button>

          

          {/* Text Area */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow p-3 focus:outline-none resize-none w-full bg-transparent text-blue-900 placeholder:text-blue-40"
            placeholder="Type your message..."
            rows="1"
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim()}
            className={`px-4 flex items-center justify-center transition-colors ${
              input.trim() 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>

        {/* Modal for Static Map */}
        {showMap && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-2xl w-full relative">
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                aria-label="Close map"
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center text-blue-700">Nearby Hospitals</h2>
              <img
                src="http://127.0.0.1:8000/map/static-map"
                alt="Map showing nearby hospitals"
                className="w-full rounded-md border"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputArea;