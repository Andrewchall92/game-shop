const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    reviews: [Review]
  }

  Type Coupon {
    _id: ID
    name: String
    discount: Float
    expiration: Date
  }

  type Review {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    address: String
    zip: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
   
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String! address: String!, zip: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, address: String, zip: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addReview(productId: ID!, commentText: String!): Product
    removeReview(productId: ID!, commentId: ID!): Product
    login(email: String!, password: String!): Auth
    createCoupon(name: String!, discount: Float!, expiration: Date!): Coupon
  }
`;

module.exports = typeDefs;
