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
    likes: Int
  }

  type Coupon {
    _id: ID
    name: String
    discount: Float
    expiration: String
  }

  type Review {
    _id: ID
    commentText: String
    createdAt: String
    user: String
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
    address: String
    city: String
    state: String
    zip: String
    email: String
    orders: [Order]
    isAdmin: Boolean
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
    description: String
  }

  type Query {
    categories: [Category]!
    productsByCategory(category: ID!, name: String): [Product]
    products: [Product]!
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
    getAllLikes: [Product]
    GetReviews: [Product]
    allUsers: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, address: String!, city: String!, state: String!, zip: String!, email: String!, password: String! ): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, address: String, city: String, state: String, zip: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addReview(productId: ID!, commentText: String!): Product
    removeReview(productId: ID!, reviewId: ID!): Product
    login(email: String!, password: String!): Auth
    createCoupon(name: String!, discount: Float!, expiration: String!): Coupon
    addLike(_id: ID!): Product
    removeLike(_id: ID!): Product
  }
`;

module.exports = typeDefs;
