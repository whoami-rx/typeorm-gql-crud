import { gql } from 'apollo-server'

export default gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
  type Mutation {
    createUser(email: String, password: String): User!
    updateUser(email: String, password: String): User!
    deleteUser(id: ID!): Boolean
  }
`
