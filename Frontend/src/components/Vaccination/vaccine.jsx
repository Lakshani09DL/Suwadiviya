import { useEffect, useState } from "react";
import Navbar from "./vaccine_components/navbar";
import FirstYear from "./vaccine_components/first_year";
import SecondYear from "./vaccine_components/second_year";
import PreSchool from "./vaccine_components/pre_school";
import SchoolGoing from "./vaccine_components/school_going";
import ChildBearing from "./vaccine_components/child_bearing";
import Pregnant from "./vaccine_components/pregnant";

function Vaccine() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);

    return (
        <>
            <Navbar />

            <div className="bg-white min-h-screen">
                {/* Full-width blue background section */}
                <div className="bg-blue-100 py-10 shadow-md">
                    <div className="max-w-screen-lg mx-auto text-center px-4">
                        <h1
                            className={`text-4xl font-bold text-blue-800 transition-all duration-1000 ${
                                show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                            }`}
                        >
                            NATIONAL IMMUNIZATION SCHEDULE - SRI LANKA
                        </h1>
                        <h2 className="text-2xl mt-4 text-blue-600 font-medium">
                            National Immunization Programme
                        </h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-6 px-4">
                    <FirstYear />
                </div>
                {/* Content Section */}
                <div className="mt-1 px-4">
                    <SecondYear />
                </div>
                {/* Content Section */}
                <div className="mt-1 px-4">
                    <PreSchool />
                </div>
                {/* Content Section */}
                <div className="mt-1 px-4">
                    <SchoolGoing />
                </div>
                {/* Content Section */}
                <div className="mt-1 px-4">
                    <ChildBearing />
                </div>
                {/* Content Section */}
                <div className="mt-1 px-4">
                    <Pregnant />
                </div>
                
            </div>
        </>
    );
}

export default Vaccine;
