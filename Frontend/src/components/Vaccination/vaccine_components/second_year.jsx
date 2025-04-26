import second_year_child from "../../../assets/second_year_child.jpg";

function SecondYear() {
    return (
        <div className="w-full px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-gray-300">
                    Second Year of Life
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Text and Table Section */}
                    <div className="flex-1">
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
                                            <td className="p-3">12 Months</td>
                                            <td className="p-3">Live JE</td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">18 Months</td>
                                            <td className="p-3">OPV & DTP (4th dose)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <img
                            src={second_year_child}
                            alt="Second year child"
                            className="rounded-xl shadow-md w-[300px] h-[250px] object-cover border-4 border-blue-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondYear;
