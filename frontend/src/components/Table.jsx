import React from "react";
import CustomButton, {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./common/buttons/CustomButton";

const usersList = [
  { _id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
  { _id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
  { _id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", age: 40 },
];

const Table = ({ userData, isLoading, onClickEdit, onClickDelete }) => {
  const users = userData || usersList || [];
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden px-2 py-4 mb-10">
      <div className="w-full px-4 overflow-auto py-2 bg-white border border-gray-200 rounded shadow-sm">
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
                    <div className="flex gap-2">
                      <CustomButton
                        text="Edit"
                        onClick={() => onClickEdit(user)}
                        variant={BUTTON_VARIANTS.TEXT_PRIMARY}
                        size={BUTTON_SIZES.SM}
                        className="px-0! py-0! rounded-sm! cursor-pointer"
                      />
                      <CustomButton
                        text="Delete"
                        onClick={() => onClickDelete(user._id)}
                        variant={BUTTON_VARIANTS.TEXT_DANGER}
                        size={BUTTON_SIZES.SM}
                        className="px-0! py-0! rounded-sm! cursor-pointer"
                      />
                    </div>
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
