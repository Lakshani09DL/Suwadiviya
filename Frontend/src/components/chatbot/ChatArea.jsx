// components/chatbot/ChatArea.jsx
import { useRef, useEffect } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import VideoMessage from './VideoMessage';


const ChatArea = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {messages.map((msg) =>
        msg.type === 'videos' ? (
          <VideoMessage key={msg.id} videos={msg.videos} />
        ) : (
          <Message key={msg.id} message={msg} />
        )
      )}
      
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatArea;