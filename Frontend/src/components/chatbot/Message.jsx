// components/Message.jsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Avatar from './Avatar';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isUser = sender === 'user';

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Markdown components
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
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <Avatar sender={sender} />}
      
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {text}
        </ReactMarkdown>
        <span className={`text-xs block mt-1 text-right ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
          {formatTime(timestamp)}
        </span>
      </div>
      
      {isUser && <Avatar sender={sender} />}
    </div>
  );
};

export default Message;