import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

interface User {
    id: number;
    name: string;
    email: string;
    joinDate: string;
    role: string;
}

function UserManagementPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'John Doe', email: 'johndoe@email.com', joinDate: '2024-01-01', role: 'User' },
        { id: 2, name: 'Alice Bob', email: 'alice@email.com', joinDate: '2023-12-20', role: 'Admin' },
        // Add more mock users here
    ]);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<Omit<User, 'id'>>({ name: '', email: '', joinDate: '', role: '' });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openAddUserModal = () => {
        setIsAddUserModalOpen(true);
        setNewUser({ name: '', email: '', joinDate: '', role: '' });
    };

    const closeAddUserModal = () => {
        setIsAddUserModalOpen(false);
    };

    const handleNewUserInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setNewUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleAddUser = () => {
        // In a real application, you would send this data to your backend to create a new user
        const newUserWithId = { id: users.length + 1, ...newUser };
        setUsers([...users, newUserWithId]);
        closeAddUserModal();
        console.log('New user added:', newUser);
    };

    const openEditUserModal = (user: User) => {
        setUserToEdit(user);
        setIsEditUserModalOpen(true);
    };

    const closeEditUserModal = () => {
        setIsEditUserModalOpen(false);
        setUserToEdit(null);
    };

    const handleEditUserInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUserToEdit(prevUser => prevUser ? { ...prevUser, [name]: value } : null);
    };

    const handleUpdateUser = () => {
        // In a real application, you would send this data to your backend to update the user
        if (userToEdit) {
            const updatedUsers = users.map(user =>
                user.id === userToEdit.id ? userToEdit : user
            );
            setUsers(updatedUsers);
            closeEditUserModal();
            console.log('User updated:', userToEdit);
        }
    };

    const handleDeleteUser = (id: number) => {
        // In a real application, you would send this ID to your backend to delete the user
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        console.log('User deleted:', id);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="bg-white rounded-md shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>

                {/* Search and Add User Section */}
                <div className="flex justify-between items-center mb-4">
                    <div className="relative flex items-center">
                        <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by Email or Name"
                            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <button onClick={openAddUserModal} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md text-sm flex items-center">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add User
                    </button>
                </div>

                {/* User Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map(user => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joinDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => openEditUserModal(user)} className="text-indigo-600 hover:text-indigo-900">
                                            <FontAwesomeIcon icon={faPencilAlt} />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Add User Modal */}
                {isAddUserModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Add New User</h3>
                                    <div className="mb-2">
                                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                                        <input type="text" id="name" name="name" value={newUser.name} onChange={handleNewUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                        <input type="email" id="email" name="email" value={newUser.email} onChange={handleNewUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="joinDate" className="block text-gray-700 text-sm font-bold mb-2">Join Date:</label>
                                        <input type="date" id="joinDate" name="joinDate" value={newUser.joinDate} onChange={handleNewUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
                                        <select id="role" name="role" value={newUser.role} onChange={handleNewUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="">Select Role</option>
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                            {/* Add more roles as needed */}
                                        </select>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleAddUser}>
                                        Add User
                                    </button>
                                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeAddUserModal}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit User Modal */}
                {isEditUserModalOpen && userToEdit && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Edit User</h3>
                                    <div className="mb-2">
                                        <label htmlFor="edit-name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                                        <input type="text" id="edit-name" name="name" value={userToEdit.name} onChange={handleEditUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="edit-email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                        <input type="email" id="edit-email" name="email" value={userToEdit.email} onChange={handleEditUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="edit-joinDate" className="block text-gray-700 text-sm font-bold mb-2">Join Date:</label>
                                        <input type="date" id="edit-joinDate" name="joinDate" value={userToEdit.joinDate} onChange={handleEditUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="edit-role" className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
                                        <select id="edit-role" name="role" value={userToEdit.role} onChange={handleEditUserInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="">Select Role</option>
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                            {/* Add more roles as needed */}
                                        </select>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleUpdateUser}>
                                        Update User
                                    </button>
                                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeEditUserModal}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserManagementPage;