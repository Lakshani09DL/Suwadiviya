import { Link } from "react-router-dom";
import test_img from "../../assets/tests.jpg";

function Testcard() {
  return (
    <div className="flex flex-row m-6 p-10 bg-white shadow-md rounded-lg">
      <div className="flex-shrink-0">
        <img
          src={test_img}
          alt="Clinic"
          className="w-auto h-40 object-contain"
        />
      </div>
      <div className="ml-10 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Tests</h3>
        <span className="block text-gray-700 mb-4">
          Explore a wide range of diagnostic tests available at our hospital
        </span>
        <Link to={"/nawaloka/tests"}>
          <button className="bg-blue-600 text-white px-3 py-2 text-base rounded hover:bg-blue-700 transition">
            Visit Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Testcard;
