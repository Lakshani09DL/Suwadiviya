/*import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Navbar bg-white shadow-sm px-10 py-10 flex justify-between items-center">
            <div className="Left flex items-center gap-4">
                <span className="text-4xl text-blue-600 font-bold">SuwaDiviya</span>
                {/* <div className="Search hidden md:flex items-center border border-gray-300 rounded px-2 py-0.5 bg-gray-100">
                    <SearchIcon className="text-gray-500 text-sm" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-transparent outline-none text-sm h-8"
                    />
                </div> *//*}
            </div>

            {/* Desktop Navigation *//*}
            <div className="Right hidden md:flex items-center gap-4 text-black text-sm">
                <HomeIcon className="cursor-pointer text-base" />
                <span className="cursor-pointer hover:text-blue-600">About us</span>
                <span className="cursor-pointer hover:text-blue-600">Clinics</span>
                <span className="cursor-pointer hover:text-blue-600">Tests & Scans</span>
            </div>

            {/* Mobile Hamburger Button *//*}
            <button 
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <CloseIcon className="text-2xl" />
                ) : (
                    <MenuIcon className="text-2xl" />
                )}
            </button>

            {/* Mobile Menu *//*}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <div className="Search flex items-center border border-gray-300 rounded px-2 py-0.5 bg-gray-100 mb-4">
                            <SearchIcon className="text-gray-500 text-sm" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-2 bg-transparent outline-none text-sm h-6 w-full"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-black text-sm py-2">
                            <HomeIcon className="text-base" />
                            <span>Home</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2">
                            <span className="block py-2 cursor-pointer text-black hover:text-blue-600">About us</span>
                            <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Clinics</span>
                            <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Tests & Scans</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;*/
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Navbar bg-white shadow-sm px-10 py-10 flex justify-between items-center">
            <div className="Left flex items-center gap-4">
                <span className="text-4xl text-blue-600 font-bold">SuwaDiviya</span>
                {/* <div className="Search hidden md:flex items-center border border-gray-300 rounded px-2 py-0.5 bg-gray-100">
                    <SearchIcon className="text-gray-500 text-sm" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-transparent outline-none text-sm h-8"
                    />
                </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="Right hidden md:flex items-center gap-4 text-black text-sm">
                <Link to={"/"}>
                    <HomeIcon className="cursor-pointer text-base" />
                </Link>
                <Link to={"/colombo/"}>
                    <span className="block py-2 cursor-pointer text-black hover:text-blue-600">About us</span>
                </Link>
                <Link to={"/colombo/clinics"}>
                    <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Clinics</span>
                </Link>
                <Link to={"/colombo/scans"}>
                    <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Scans</span>
                </Link>
                <Link to={"/colombo/tests"}>
                    <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Tests</span>
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <CloseIcon className="text-2xl" />
                ) : (
                    <MenuIcon className="text-2xl" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <div className="Search flex items-center border border-gray-300 rounded px-2 py-0.5 bg-gray-100 mb-4">
                            <SearchIcon className="text-gray-500 text-sm" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-2 bg-transparent outline-none text-sm h-6 w-full"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-black text-sm py-2">
                            <HomeIcon className="text-base" />
                            <span>Home</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2">
                            <Link to={"/colombo/"}>
                                <span className="block py-2 cursor-pointer text-black hover:text-blue-600">About us</span>
                            </Link>
                            <Link to={"/colombo/clinics"}>
                                <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Clinics</span>
                            </Link>
                            <Link to={"/colombo/scans"}>
                                <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Scans</span>
                            </Link>
                            <Link to={"/colombo/tests"}>
                                <span className="block py-2 cursor-pointer text-black hover:text-blue-600">Tests</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;