import { Link } from "react-router-dom";

function Testcard() {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Tests</h3>
            <span className="block text-gray-700 mb-4">
                Explore a wide range of diagnostic tests available at our hospital
            </span>
            <Link to={"/gampaha/tests"}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Learn More
                </button>
            </Link>
        </div>
    );
}

export default Testcard;
