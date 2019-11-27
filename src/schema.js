const { gql } = require('apollo-server');

const schemas = gql`
  type Query {
    users: [User]!
    user(id: ID!): User
    countUsersByPermission(permission: PermissionRole!): CountPermissionResponse
  }

  type Mutation {
    addUser(params: UserInput!): User
  }

  input UserInput {
    name: String!
    email: String!
    permission: PermissionRole!
  }

  type User {
    id: ID!
    name: String!
    email: String
    permission: PermissionRole
  }

  type CountPermissionResponse {
    permission: PermissionRole
    count: Int
  }

  enum PermissionRole {
    ADMIN
    USER
  }
`;

module.exports = schemas;
