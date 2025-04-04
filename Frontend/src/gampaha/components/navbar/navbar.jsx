import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <div className="Navbar bg-white shadow-sm px-6 py-2 flex justify-between items-center">
            <div className="Left flex items-center gap-4">
                <span className="text-blue-600 text-lg font-bold">SuwaDiviya</span>
                <div className="Search flex items-center border border-gray-300 rounded px-2 py-0.5 bg-gray-100">
                    <SearchIcon className="text-gray-500 text-sm" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-transparent outline-none text-sm h-6"
                    />
                </div>
            </div>
            <div className="Right flex items-center gap-4 text-black text-sm">
                <HomeIcon className="cursor-pointer text-base" />
                <span className="cursor-pointer">About us</span>
                <span className="cursor-pointer">Clinics</span>
                <span className="cursor-pointer">Tests & Scans</span>
            </div>
        </div>
    );
}

export default Navbar;
