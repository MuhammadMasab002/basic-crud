import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomFormInput, { INPUT_TYPES } from "./common/inputs/CustomFormInput";
import CustomButton, { BUTTON_VARIANTS } from "./common/buttons/CustomButton";

const Form = () => {
  const navigate = useNavigate();

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
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email format";
      }
    }

    // age validation
    if (!age) {
      newErrors.age = "age is required";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // form success
    console.log("Form submitted successfully:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="w-full grid grid-cols-1">
      <div className="flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-left text-primary mb-8">
            Create an User
          </h2>
          <p className="text-left text-black mb-6">Enter your details below</p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-black"
          >
            <CustomFormInput
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type={INPUT_TYPES.TEXT}
              variant={errors.name ? "error" : "default"}
              errorMessage={errors.name}
            />

            <CustomFormInput
              placeholder="Email or Phone Number"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type={INPUT_TYPES.EMAIL}
              variant={errors.email ? "error" : "default"}
              errorMessage={errors.email}
            />

            <CustomFormInput
              placeholder="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              type={INPUT_TYPES.NUMBER}
              variant={errors.age ? "error" : "default"}
              errorMessage={errors.age}
            />

            <CustomButton
              text="Create User"
              type="submit"
              variant={BUTTON_VARIANTS.PRIMARY}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
