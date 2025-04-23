// components/chatbot/ChatInterface.jsx
import { useState } from 'react';
import Header from './Header';
import ChatArea from './ChatArea';
import InputArea from './InputArea';
import EmptyState from './EmptyState';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      text,
      sender: 'user',
      timestamp: new Date(),
      id: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      
      const response = await fetch('http://127.0.0.1:8000/chatbot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: text }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
          id: Date.now() + 1
        }
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      // Show error message to user
      setMessages(prev => [
        ...prev,
        {
          text: "Sorry, I couldn't process your request. Please try again later.",
          sender: 'bot',
          timestamp: new Date(),
          id: Date.now() + 1
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col h-screen bg-gray-50 z-50">
      <Header />
      <div className="flex-grow overflow-auto p-4 bg-gray-50">
        {messages.length === 0 ? (
          <EmptyState />
        ) : (
          <ChatArea messages={messages} isTyping={isTyping} />
        )}
      </div>
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatInterface;