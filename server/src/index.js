import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema.js";
import { userResolvers } from "./resolvers/userResolvers.js";
import { jobResolvers } from "./resolvers/jobResolvers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

// Combine all resolvers into one
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...jobResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...jobResolvers.Mutation,
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    if (!token) return {};

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return { userId: decoded.userId };
    } catch (err) {
      console.error("Invalid token");
      return {};
    }
  },
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// Start the Apollo Server + Express app
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer();
