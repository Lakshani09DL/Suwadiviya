// components/chatbot/ChatInterface.jsx
import { useState } from 'react';
import Header from './Header';
import ChatArea from './ChatArea';
import InputArea from './InputArea';
import EmptyState from './EmptyState';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      text,
      sender: 'user',
      timestamp: new Date(),
      id: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botReply = "";

      if (text.toLowerCase().includes("what is cpr")) {
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

> **Important**: CPR can double or triple chances of survival after cardiac arrest`;
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
