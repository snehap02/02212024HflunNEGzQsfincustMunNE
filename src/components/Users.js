import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/users"); // Example API endpoint
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Failed to fetch users: " + error.message);
    }
  };

  const updateStatus = async (id, isVerified) => {
    try {
      const response = await fetch(`/api/users/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isVerified }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        getData();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Failed to update status: " + error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-6 pt-36 min-h-screen bg-webBg">
      <h1 className="text-white text-2xl">Users</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Verified</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className={
                user.isVerified ? "bg-green-50" : "bg-red-50"
              }
            >
              <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.phoneNumber}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.isVerified ? "Verified" : "Pending"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.isVerified ? (
                  <button
                    className="bg-red-600 text-white px-4 py-1 rounded"
                    onClick={() => updateStatus(user._id, false)}
                  >
                    Deactivate
                  </button>
                ) : (
                  <button
                    className="bg-green-600 text-white px-4 py-1 rounded"
                    onClick={() => updateStatus(user._id, true)}
                  >
                    Activate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;