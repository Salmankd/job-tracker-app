import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const userResolvers = {
  Query: {},

  Mutation: {
    signup: async (_, { name, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error("Email already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid password");

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return { token, user };
    },
  },
};
