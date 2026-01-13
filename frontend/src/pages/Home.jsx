import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "../services/api";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [editingUserId, setEditingUserId] = useState(null);

  const {
    data: userData,
    error: isError,
    isLoading: isLoadingUser,
  } = useGetUserQuery();

  const [triggerCreateUser] = useCreateUserMutation();
  const [triggerUpdateUser] = useUpdateUserMutation();
  const [triggerDeleteUser] = useDeleteUserMutation();

  const onClickEdit = async (user) => {
    if (!user) return;
    console.log("Edit user:", user);
    setEditingUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age,
    });
  };

  const onClickDelete = async (userId) => {
    if (!userId) return;
    console.log("Delete user with id:", userId);
    await triggerDeleteUser(userId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear individual field error on change
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const { name, email, age } = formData;
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    // else {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(email)) {
    //     newErrors.email = "Invalid email format";
    //   }
    // }

    // age validation
    if (!age) {
      newErrors.age = "age is required";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    if (editingUserId) {
      await triggerUpdateUser({ id: editingUserId, ...formData });
      setEditingUserId(null);
      console.log(
        "Updating user with id:",
        editingUserId,
        "and data:",
        formData
      );
    } else {
      await triggerCreateUser(formData);
      console.log("Creating user with data:", formData);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      age: "",
    });
    setErrors({
      name: "",
      email: "",
      age: "",
    });
  };

  isError && console.log("Error fetching users:", isError);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gray-50">
      <Form
        formData={formData}
        setFormData={setFormData}
        editingUserId={editingUserId}
        setEditingUserId={setEditingUserId}
        onSubmit={handleSubmit}
        errors={errors}
        onChange={handleChange}
      />
      <Table
        userData={userData?.data}
        isLoading={isLoadingUser}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default Home;
