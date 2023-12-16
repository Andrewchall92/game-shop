import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
query Query($id: ID!) {
  product(_id: $id) {
    _id
    description
    category {
      name
    }
    image
    likes
    name
    price
    reviews {
      commentText
      createdAt
      user
    }
  }
}
`;


export const QUERY_CHECKOUT = gql`
query Checkout($products: [ProductInput]) {
  checkout(products: $products) {
    session
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
query Query {
  products {
    name
    _id
    category {
      name
    }
    likes
    description
    price
    image
    quantity
    reviews {
      user
      commentText
      createdAt
    }
  }
}

`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
query User($email: String!) {
  user(email: $email) {
    _id
    address
    city
    email
    firstName
    isAdmin
    lastName
    zip
  }
}
`;

export const QUERY_ALL_REVIEWS = gql`
  {
    reviews {
      _id
      commentText
      createdAt
      user {
        firstName
        lastName
      }
    }
  }
`;
