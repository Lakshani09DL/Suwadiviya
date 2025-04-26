import pregnant from "../../../assets/Pregnant.jpg";

function Pregnant() {
    return (
        <div className="w-full px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-gray-300">
                    Pregnant Women
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/3 flex flex-col items-center">
                        <img
                            src={pregnant}
                            alt="Pregnant Woman"
                            className="rounded-xl shadow-md w-[300px] h-auto object-contain border-4 border-blue-100 mb-8"
                        />
                    </div>

                    {/* Right Column - Text */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        {/* Row: Didn’t Have + Had TT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Didn’t have TT */}
                            <div>
                                <p className="text-xl text-blue-600 font-bold mb-2">Didn’t Have Tetanus Toxoid</p>
                                <p className="text-sm text-gray-700 mb-2">
                                    No documented evidence of previously being vaccinated with TT containing vaccine.
                                </p>
                                <table className="w-full text-left border border-gray-300 rounded-lg text-sm text-gray-700">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-700">
                                            <th className="p-3">Dose</th>
                                            <th className="p-3">When</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["1st dose", "1st pregnancy, after 12 weeks of POA"],
                                            ["2nd dose", "1st pregnancy, 6-8 weeks after the 1st dose"],
                                            ["3rd dose", "2nd pregnancy, after 12 weeks of POA"],
                                            ["4th dose", "3rd pregnancy, after 12 weeks of POA"],
                                            ["5th dose", "4th pregnancy, after 12 weeks of POA"]
                                        ].map(([dose, when], idx) => (
                                            <tr key={idx} className="border-t border-gray-200">
                                                <td className="p-3">{dose}</td>
                                                <td className="p-3">{when}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Had TT */}
                            <div>
                                <p className="text-xl text-blue-600 font-bold mb-2">Had Tetanus Toxoid</p>
                                <p className="text-sm text-gray-700 mb-2">
                                    With documented vaccination, one booster dose is enough during the 1st pregnancy.
                                </p>
                                <p className="text-sm text-gray-700">
                                    Only if they have written evidence of 6 doses from childhood and adolescence:
                                    <br />
                                    <span className="italic text-gray-600">
                                        (3 DTP in infancy + DTP at 18 months + DT at 5 yrs + aTD at 11 yrs)
                                    </span>
                                    <br />
                                    And the last dose was at least 10 years ago.
                                </p>
                            </div>
                        </div>

                        {/* TT Not Indicated */}
                        <div>
                            <p className="text-xl text-blue-600 font-bold mb-2">Tetanus Toxoid Not Indicated</p>
                            <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
                                <li>Mothers already received 5 TT doses in previous pregnancies.</li>
                                <li>
                                    Already received 6 doses according to the national schedule and the last dose was
                                    within 10 years.
                                </li>
                                <li>
                                    Received 6 doses in childhood/adolescence and at least one booster (pregnancy/trauma) within 10 years.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pregnant;
