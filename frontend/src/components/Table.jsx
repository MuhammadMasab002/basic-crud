import React from "react";

// const users = [
//   { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
//   { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
//   { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", age: 40 },
// ];

const Table = ({ userData, isLoading }) => {
  const users = userData || [];
  return (
    <div className="w-full max-w-2xl mx-auto overflow-auto py-4 mb-10">
      <div className="w-full min-w-2xl px-4 overflow-hidden py-2 bg-white border border-gray-200 rounded shadow-sm">
        {/* create an table to show all users */}
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                ID
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Email
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Age
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              users?.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user._id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.age}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button className="text-blue-500 hover:underline mr-2">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
