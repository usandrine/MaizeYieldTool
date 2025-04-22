import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PlantingHarvestingRecordsPage() {
    const [isAddPlantingModalOpen, setIsAddPlantingModalOpen] = useState(false);
    const [mockPlantingRecords, setMockPlantingRecords] = useState([
        { id: 1, cropType: 'Maize', plantingDate: '2025-03-20', field: 'Field A', variety: 'Hybrid X (Maize)' },
        { id: 2, cropType: 'Maize', plantingDate: '2024-03-15', field: 'Field B', variety: 'Local Yellow (Maize)' },
        { id: 3, cropType: 'Maize', plantingDate: '2023-03-25', field: 'Field A', variety: 'Drought Resistant (Maize)' },
    ]);
    const mockHarvestingRecords = [
        { id: 101, cropType: 'Maize', harvestingDate: '2025-08-10', field: 'Field A', yield: '5.2 tons/hectare', plantingRecordId: 1 },
        { id: 102, cropType: 'Maize', harvestingDate: '2024-08-05', field: 'Field B', yield: '4.8 tons/hectare', plantingRecordId: 2 },
        { id: 103, cropType: 'Maize', harvestingDate: '2023-08-15', field: 'Field A', yield: '5.5 tons/hectare', plantingRecordId: 3 },
    ];

    const openAddPlantingModal = () => {
        setIsAddPlantingModalOpen(true);
    };

    const closeAddPlantingModal = () => {
        setIsAddPlantingModalOpen(false);
    };

    const handleSavePlantingRecord = (newRecord) => {
        // For now, just log the new record
        console.log('New Planting Record:', newRecord);
        // In a real application, you would send this data to the backend
        // and then update the planting records list.
        setMockPlantingRecords([...mockPlantingRecords, { ...newRecord, id: Date.now() }]); // Basic mock update
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
                {mockPlantingRecords.length > 0 ? (
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
                            {mockPlantingRecords.map(record => (
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
                            <div className="mb-4">
                                <label htmlFor="cropType" className="block text-gray-700 text-sm font-bold mb-2">Crop Type</label>
                                <input type="text" id="cropType" name="cropType" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="Maize" readOnly />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="plantingDate" className="block text-gray-700 text-sm font-bold mb-2">Planting Date</label>
                                <input type="date" id="plantingDate" name="plantingDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="field" className="block text-gray-700 text-sm font-bold mb-2">Field</label>
                                <input type="text" id="field" name="field" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="variety" className="block text-gray-700 text-sm font-bold mb-2">Variety</label>
                                <input type="text" id="variety" name="variety" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="plantingMethod" className="block text-gray-700 text-sm font-bold mb-2">Planting Method</label>
                                <select id="plantingMethod" name="plantingMethod" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="manual">Manual</option>
                                    <option value="mechanized">Mechanized</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rowSpacing" className="block text-gray-700 text-sm font-bold mb-2">Row Spacing (cm)</label>
                                <input type="number" id="rowSpacing" name="rowSpacing" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="seedSpacing" className="block text-gray-700 text-sm font-bold mb-2">Seed Spacing (cm)</label>
                                <input type="number" id="seedSpacing" name="seedSpacing" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="seedsPerHill" className="block text-gray-700 text-sm font-bold mb-2">Seeds Per Hill</label>
                                <input type="number" id="seedsPerHill" name="seedsPerHill" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
                                <textarea id="notes" name="notes" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onClick={closeAddPlantingModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Save Planting
                                </button>
                            </div>
                        </form>
                        <button type="button" className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-700" onClick={closeAddPlantingModal}>
                            <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l3.029-2.651-3.029-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-3.031 2.651 3.031 2.651a1.2 1.2 0 0 1 0 1.697z"/></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlantingHarvestingRecordsPage;