import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      address: $address
      city: $city
      state: $state
      zip: $zip
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $productId: ID!
    $commentText: String!
  ) {
    addReview(
      productId: $productId
      commentText: $commentText
    ) {
      _id
      commentText
      createdAt
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $quantity: Int!
    $category: ID!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      quantity: $quantity
      category: $category
    ) {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;