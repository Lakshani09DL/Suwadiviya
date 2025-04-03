import { useState, useRef, useEffect } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { text: input, sender: 'user', timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate a bot response (replace with actual API call)
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `You said: ${input}`, sender: 'bot', timestamp: new Date() },
      ]);
    }, 1500); // simulate delay for bot response
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 flex flex-col h-screen bg-gray-100 z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-3 px-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Suwadiviya AI assistant</h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-grow overflow-auto p-4 bg-gray-100">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full w-full">
            <div className="text-center text-gray-500 p-8 bg-white rounded-lg shadow-sm">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              <p className="text-lg font-medium">No messages yet</p>
              <p className="mt-1">Start a conversation by typing a message below!</p>
            </div>
          </div>
        ) : (
          <div>
            {messages.map((msg, index) => (
              <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2 mt-1">
                    <span className="text-gray-700 text-xs font-bold">B</span>
                  </div>
                )}
                <div
                  className={`max-w-sm md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <span className={`text-xs block mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-2 mt-1">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                )}
              </div>
            ))}
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                  <span className="text-gray-700 text-xs font-bold">B</span>
                </div>
                <div className="bg-white text-gray-800 px-4 py-3 rounded-lg rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-4 w-full">
        <div className="w-full">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm w-full">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow p-3 focus:outline-none resize-none w-full"
              placeholder="Type your message..."
              rows="2"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className={`px-6 flex items-center justify-center ${
                input.trim() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
