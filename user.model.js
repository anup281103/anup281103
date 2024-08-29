const mongoose = require("mongoose");

User.createUser = async (name, email) => {
  const user = new User({ name, email });
  await user.save();
  return user;
};
User.getUsers = async () => {
  const users = await User.find().exec();
  return users;
};
User.updateUser = async (id, name, email) => {
  const user = await User.findByIdAndUpdate(
    id,
    { name, email },
    { new: true }
  ).exec();
  return user;
};
User.deleteUser = async (id) => {
  await User.findByIdAndRemove(id).exec();
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
