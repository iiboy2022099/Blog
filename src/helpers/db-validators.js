import User from "../users/user.model.js";

export const existeEmail = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`The email ${email} has already been registered`);
  }
};

export const existeUserById = async (id = "") => {
  const existUser = await User.findById(id);
  if (!existUser) {
    throw new Error(`The ID: ${email} does not exist`);
  }
};
