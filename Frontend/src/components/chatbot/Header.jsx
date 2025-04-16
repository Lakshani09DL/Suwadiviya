const Header = () => {
  return (
    <div className="navbar bg-blue-500 text-white shadow-md px-6">
      <div className="flex-1">
        <span className="text-xl font-bold tracking-wide">Suwadiviya AI Assistant</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="badge badge-success badge-xs animate-pulse"></div>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
};

export default Header;
