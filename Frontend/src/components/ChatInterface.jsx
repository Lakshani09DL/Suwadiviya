import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea and scroll to bottom
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
    scrollToBottom();
  }, [messages, input]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { 
      text: input, 
      sender: 'user', 
      timestamp: new Date(),
      id: Date.now() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
  
    setTimeout(() => {
      setIsTyping(false);
      let botReply = "";
      
      if (input.toLowerCase().includes("what is cpr")) {
        botReply = `### CPR (Cardiopulmonary Resuscitation)

CPR is a life-saving technique used in emergencies when someone's heartbeat or breathing has stopped. It involves:

- **Chest compressions** to manually pump blood through the heart
- **Rescue breaths** to provide oxygen to the lungs

## Steps for Performing CPR:

1. **Call emergency services** immediately (e.g., 911)
2. **Place the person** on their back on a firm surface
3. **Kneel down** beside them
4. **Start chest compressions**:
   - Place hands on the center of the chest
   - Push down hard and fast (2 inches deep)
5. **If trained**, provide rescue breaths after every 30 compressions
6. **Continue CPR** until help arrives

> **Important**: CPR can double or triple chances of survival after cardiac arrest
`;
      } else {
        botReply = `I'm a demo chatbot. For this example, I respond to "What is CPR?" with detailed information. Try asking about CPR!`;
      }
  
      setMessages(prev => [
        ...prev,
        { 
          text: botReply, 
          sender: 'bot',
          timestamp: new Date(),
          id: Date.now() + 1
        }
      ]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Simplified markdown components
  const markdownComponents = {
    p: ({ node, ...props }) => <p className="mb-3 leading-relaxed" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-3" {...props} />
    ),
    code: ({ node, inline, ...props }) => (
      <code className={`bg-gray-200 px-1 py-0.5 rounded text-sm font-mono ${inline ? '' : 'block w-full overflow-x-auto p-2 my-2'}`} {...props} />
    ),
  };

  return (
    <div className="fixed inset-0 flex flex-col h-screen bg-gray-50 z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-3 px-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">Suwadiviya AI Assistant</h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-grow overflow-auto p-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500 p-8 bg-white rounded-lg shadow-sm max-w-md">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              <p className="text-lg font-medium">No messages yet</p>
              <p className="mt-1 text-gray-600">Try asking "What is CPR?" to see a detailed markdown response</p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-1">
                    <span className="text-blue-600 text-sm font-bold">AI</span>
                  </div>
                )}
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {msg.text}
                  </ReactMarkdown>
                  <span className={`text-xs block mt-1 text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center ml-2 mt-1">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-bold">AI</span>
                </div>
                <div className="bg-white text-gray-800 px-4 py-3 rounded-lg rounded-bl-none shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow p-3 focus:outline-none resize-none w-full bg-transparent"
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
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;