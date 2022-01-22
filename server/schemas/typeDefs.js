const { gql } = require('apollo-server-express');
const { User } =require('../models');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookcount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String 
    link: String
  }
  
  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input SavedBook {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth 
    saveBook(book: SavedBook!): User
    removeBook(bookId: ID!): User 
  }
`;

module.exports = typeDefs;