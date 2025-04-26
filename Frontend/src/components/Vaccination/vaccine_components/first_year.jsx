import one_year_child from "../../../assets/year_child.jpg";

function FirstYear() {
    return (
        <div className="w-full px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-gray-300">
                    First Year of Life
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Text and Table Section */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <p className="text-lg text-gray-800 font-medium mb-1">
                                0-4 weeks : <span className="font-semibold text-blue-600">BCG</span>
                            </p>
                            <p className="text-gray-700 text-sm">
                                Preferably within 24 hours of birth (before leaving hospital).<br />
                                If a scar is not present, 2nd dose could be offered after 6 months, up to 5 years.
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-lg text-gray-800 font-medium mb-2">On completion of:</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border border-gray-300 rounded-lg text-sm text-gray-700">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-700">
                                            <th className="p-3">Age</th>
                                            <th className="p-3">Vaccinations</th>
                                            <th className="p-3">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">2 Months</td>
                                            <td className="p-3">
                                                OPV & Pentavalent (1st dose)<br />
                                                FIPV (1st dose)
                                            </td>
                                            <td className="p-3">
                                                For a defaulter/unvaccinated child, 6-8 weeks gap is enough.
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">4 Months</td>
                                            <td className="p-3">
                                                OPV & Pentavalent (2nd dose)<br />
                                                FIPV (2nd dose)
                                            </td>
                                            <td className="p-3"></td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">6 Months</td>
                                            <td className="p-3">OPV & Pentavalent (3rd dose)</td>
                                            <td className="p-3"></td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">9 Months</td>
                                            <td className="p-3">MMR (1st dose)</td>
                                            <td className="p-3"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <img
                            src={one_year_child}
                            alt="First year child"
                            className="rounded-xl shadow-md w-[350px] h-auto object-contain border-4 border-blue-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstYear;
