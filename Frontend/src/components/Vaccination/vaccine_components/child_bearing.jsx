
function ChildBearing() {
    return (
        <div className="w-full px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-gray-300">
                    Females in The Child-Bearing Age
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Text and Table Section */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <p className="text-lg text-gray-800 font-medium mb-1">
                                15-44 Years : <span className="font-semibold text-blue-600">Rubella containing vaccine (MMR)</span>
                            </p>
                            <p className="text-gray-700 text-sm">
                                One dose of MMR vaccine should be given to all females between 15 and 44 years of age,
                                who have not been vaccinated with Rubella containing vaccines earlier.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default ChildBearing;
