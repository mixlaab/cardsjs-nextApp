const { Deck } = require("./lib/game");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Card {
    number: String
    symbol: String
  }

  type Query {
    books: [Book]
    cards: [Card]
    table: [Card]
    getCards(size: Int): [Card]
  }

  type Mutation {
    addBook(title: String, author: String): Book
    addCard(number: String, symbol: String): Card
    restoreCards: String
  }
`;

let deck = new Deck();
let table = deck.dispatchCardsOnce(5);

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    cards: () => deck.cards,
    table: () => table,
    getCards: (_, { size }) => deck.dispatchCardsOnce(size),
  },
  Mutation: {
    addBook: (_, args) => {
      console.log(args);
    },
    addCard: (_, args) => {
      deck.cards.push({ ...args });
    },
    restoreCards: () => {
      deck = new Deck();
      table = deck.dispatchCardsOnce(5);
      return "OK";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
