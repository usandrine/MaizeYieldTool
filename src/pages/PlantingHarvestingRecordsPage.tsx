import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Export the mockHarvestingRecords constant
export const mockHarvestingRecords = [
    { id: 101, cropType: 'Maize', harvestingDate: '2025-08-10', field: 'Field A', yield: '5.2 tons/hectare', plantingRecordId: 1 },
    { id: 102, cropType: 'Maize', harvestingDate: '2024-08-05', field: 'Field B', yield: '4.8 tons/hectare', plantingRecordId: 2 },
    { id: 103, cropType: 'Maize', harvestingDate: '2023-08-15', field: 'Field A', yield: '5.5 tons/hectare', plantingRecordId: 3 },
];

// Export the mockPlantingRecords constant as well
export const mockPlantingRecords = [
    { id: 1, cropType: 'Maize', plantingDate: '2025-03-20', field: 'Field A', variety: 'Hybrid X (Maize)' },
    { id: 2, cropType: 'Maize', plantingDate: '2024-03-15', field: 'Field B', variety: 'Local Yellow (Maize)' },
    { id: 3, cropType: 'Maize', plantingDate: '2023-03-25', field: 'Field A', variety: 'Drought Resistant (Maize)' },
];

function PlantingHarvestingRecordsPage() {
    const [isAddPlantingModalOpen, setIsAddPlantingModalOpen] = useState(false);
    // The state for mockPlantingRecords is now separate from the exported constant
    const [plantingRecords, setPlantingRecords] = useState(mockPlantingRecords);

    const openAddPlantingModal = () => {
        setIsAddPlantingModalOpen(true);
    };

    const closeAddPlantingModal = () => {
        setIsAddPlantingModalOpen(false);
    };

    const handleSavePlantingRecord = (newRecord) => {
        console.log('New Planting Record:', newRecord);
        setPlantingRecords([...plantingRecords, { ...newRecord, id: Date.now() }]);
        closeAddPlantingModal();
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Link to="/dashboard" className="text-green-600 hover:underline mb-4 block">
                ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-semibold text-gray-700 mb-6">Planting & Harvesting Records</h1>

            {/* Planting Records */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Planting Records</h2>
                {plantingRecords.length > 0 ? (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 text-left">Crop Type</th>
                                <th className="py-2 text-left">Planting Date</th>
                                <th className="py-2 text-left">Field</th>
                                <th className="py-2 text-left">Variety</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plantingRecords.map(record => (
                                <tr key={record.id} className="border-b last:border-b-0">
                                    <td className="py-2">{record.cropType}</td>
                                    <td className="py-2">{record.plantingDate}</td>
                                    <td className="py-2">{record.field}</td>
                                    <td className="py-2">{record.variety}</td>
                                    <td className="py-2 text-green-600 hover:underline cursor-pointer">View Details</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No planting records found.</p>
                )}
                <button onClick={openAddPlantingModal} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Add New Planting Record
                </button>
            </div>

            {/* Harvesting Records */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Harvesting Records</h2>
                {mockHarvestingRecords.length > 0 ? (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 text-left">Crop Type</th>
                                <th className="py-2 text-left">Harvesting Date</th>
                                <th className="py-2 text-left">Field</th>
                                <th className="py-2 text-left">Yield</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockHarvestingRecords.map(record => (
                                <tr key={record.id} className="border-b last:border-b-0">
                                    <td className="py-2">{record.cropType}</td>
                                    <td className="py-2">{record.harvestingDate}</td>
                                    <td className="py-2">{record.field}</td>
                                    <td className="py-2">{record.yield}</td>
                                    <td className="py-2 text-green-600 hover:underline cursor-pointer">View Details</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No harvesting records found.</p>
                )}
                {/* Button to add new harvesting record could be here */}
            </div>

            {/* Add New Planting Record Modal */}
            {isAddPlantingModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="addPlantingModal">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Add New Planting Record</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const newRecord = {
                                cropType: formData.get('cropType'),
                                plantingDate: formData.get('plantingDate'),
                                field: formData.get('field'),
                                variety: formData.get('variety'),
                                plantingMethod: formData.get('plantingMethod'),
                                rowSpacing: formData.get('rowSpacing'),
                                seedSpacing: formData.get('seedSpacing'),
                                seedsPerHill: formData.get('seedsPerHill'),
                                notes: formData.get('notes'),
                            };
                            handleSavePlantingRecord(newRecord);
                        }}>
                            {/* ... (rest of the form remains the same) ... */}
                        </form>
                        {/* ... (rest of the modal remains the same) ... */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlantingHarvestingRecordsPage;