// componentschatbot/Header.jsx
const Header = () => {
    return (
      <div className="bg-blue-600 text-white py-3 px-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold">Suwadiviya AI Assistant</h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Online</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;