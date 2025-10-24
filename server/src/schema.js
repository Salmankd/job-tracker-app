import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Job {
    id: ID!
    company: String!
    position: String!
    status: String!
    createdAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getJobs: [Job]
    getJob(id: ID!): Job
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload

    addJob(company: String!, position: String!, status: String!): Job
    updateJob(id: ID!, company: String, position: String, status: String): Job
    deleteJob(id: ID!): Boolean
  }
`;
