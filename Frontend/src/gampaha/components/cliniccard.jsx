import { Link } from "react-router-dom";
import clinic_img from "../../assets/clinic.jpg";

function Cliniccard() {
    return (
        <div className="flex flex-row m-6 p-10 bg-white shadow-md rounded-lg">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img src={clinic_img} alt="Clinic" className="w-auto h-40 object-contain"/>
            </div>
            
            {/* Text and Button Section */}
            <div className="ml-10 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Clinics</h3>
                <span className="block text-gray-700 mb-4">
                    Visit our specialized clinics for expert treatment in various fields.
                </span>
                <Link to={"/gampaha/clinics"}>
                    <button className="bg-blue-600 text-white px-3 py-2 text-base rounded hover:bg-blue-700 transition">
                        Visit Page
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Cliniccard;
