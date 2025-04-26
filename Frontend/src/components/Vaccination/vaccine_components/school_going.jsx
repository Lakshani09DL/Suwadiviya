import school_child from "../../../assets/school_child.jpg";

function SchoolGoing() {
    return (
        <div className="w-full px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-gray-300">
                    School-Going Age
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
                                            <td className="p-3">5 Years</td>
                                            <td className="p-3">
                                                OPV & Pentavalent (5th dose)
                                            </td>
                                            <td className="p-3">
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">10 Years((Grade 6)</td>
                                            <td className="p-3">
                                                HPV (1st dose)
                                            </td>
                                            <td className="p-3"></td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">10 Years((Grade 6)</td>
                                            <td className="p-3">HPV (1st dose)</td>
                                            <td className="p-3">6 months after 1st dose</td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <td className="p-3">11 Years((Grade 7)</td>
                                            <td className="p-3">aTd (adult Tetanus diphtheria) (6th dose)</td>
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
                            src={school_child}
                            alt="First year child"
                            className="rounded-xl shadow-md w-[350px] h-auto object-contain border-4 border-blue-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolGoing;
