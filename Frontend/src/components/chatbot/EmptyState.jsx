const EmptyState = () => {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="card bg-white text-blue-700 shadow-lg border border-blue-100 max-w-md w-full p-6">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-5 text-blue-900">Revana is here to help!</h2>
          <p className="text-base text-blue-600 text-center">
            I'm your <span className="font-semibold">AI assistant</span> for emergencies and everyday medical and hospital related information.<br /> <span className="font-semibold">How can I help you?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
