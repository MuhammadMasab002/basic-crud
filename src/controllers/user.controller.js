import { User } from "../models/user.model";

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res
        .status(400)
        .json({ message: "Name, Email, and Age are required" });
    }

    const newUser = await User.create({ name, email, age });
    if (!newUser) {
      return res.status(500).json({ message: "Failed to create user" });
    }

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get user
const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, age },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createUser, getUser, updateUser, deleteUser };
