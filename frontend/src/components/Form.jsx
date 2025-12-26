import React from "react";
import CustomFormInput, { INPUT_TYPES } from "./common/inputs/CustomFormInput";
import CustomButton, { BUTTON_VARIANTS } from "./common/buttons/CustomButton";

const Form = ({
  formData,
  setFormData,
  editingUserId,
  onSubmit,
  setEditingUserId,
  errors,
  onChange,
}) => {
  return (
    <div className="w-full grid grid-cols-1">
      <div className="flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-left text-primary mb-8">
            {editingUserId ? "Update User Details" : "Create an User"}
          </h2>
          <p className="text-left text-black mb-6">Enter your details below</p>

          {/* FORM */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5 text-black">
            <CustomFormInput
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              type={INPUT_TYPES.TEXT}
              variant={errors.name ? "error" : "default"}
              errorMessage={errors.name}
            />

            <CustomFormInput
              placeholder="Email or Phone Number"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              type={INPUT_TYPES.EMAIL}
              variant={errors.email ? "error" : "default"}
              errorMessage={errors.email}
            />

            <CustomFormInput
              placeholder="age"
              name="age"
              value={formData.age}
              onChange={onChange}
              required
              type={INPUT_TYPES.NUMBER}
              variant={errors.age ? "error" : "default"}
              errorMessage={errors.age}
            />
            {editingUserId ? (
              <div className="flex gap-4">
                <CustomButton
                  text={editingUserId ? "Update User" : "Create User"}
                  type="submit"
                  variant={
                    editingUserId
                      ? BUTTON_VARIANTS.SUCCESS
                      : BUTTON_VARIANTS.PRIMARY
                  }
                />
                <CustomButton
                  text="Cancel"
                  type="button"
                  variant={BUTTON_VARIANTS.SECONDARY}
                  onClick={() => {
                    // Reset form and editing state
                    setFormData({ name: "", email: "", age: "" });
                    setEditingUserId(null);
                  }}
                />
              </div>
            ) : (
              <CustomButton
                text="Create User"
                type="submit"
                variant={BUTTON_VARIANTS.PRIMARY}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
