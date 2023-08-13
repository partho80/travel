import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      messege: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, messege: "Failed to create . Try again" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      messege: "Successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      messege: "Failed to update",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      messege: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      messege: "Failed to delete",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      messege: "Successful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      messege: "not found",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      messege: "Successful",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      messege: "not found",
    });
  }
};
