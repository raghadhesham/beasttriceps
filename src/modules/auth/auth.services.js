import { compare, hash } from "bcrypt";
import { createOne, findOne } from "../../db/database.repository.js";
import { User } from "../../db/models/user.model.js";

export const signup = async ({
  firstName,
  lastName,
  email,
  DOB,
  gender,
  password,
  confirmPassword,
}) => {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !DOB ||
    !password ||
    !confirmPassword
  ) {
    throw new Error("All required fields must be provided");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await findOne({
    model: User,
    filter: { email: normalizedEmail },
  });
  if (existingUser) {
    throw new Error("Email is already registered");
  }

  const passwordHash = await hash(password, 12);
  const user = await createOne({
    model: User,
    data: {
      firstName,
      lastName,
      email: normalizedEmail,
      DOB,
      gender,
      password: passwordHash,
    },
  });

  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

export const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await findOne({
    model: User,
    filter: { email: email.trim().toLowerCase() },
  });
  if (!user || !(await compare(password, user.password))) {
    throw new Error("Invalid email or password");
  }

  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
