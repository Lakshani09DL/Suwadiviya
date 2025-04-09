// components/EmptyState.jsx
const EmptyState = () => {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-gray-500 p-8 bg-white rounded-lg shadow-sm max-w-md">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <p className="text-lg font-medium">No messages yet</p>
          <p className="mt-1 text-gray-600">Try asking "What is CPR?" to see a detailed markdown response</p>
        </div>
      </div>
    );
  };
  
  export default EmptyState;