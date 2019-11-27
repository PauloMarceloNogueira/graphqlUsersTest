const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UserAPI = require('./datasources/user');
const Guard = require('./datasources/guard');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI(),
    guard: new Guard('jwtoken-testea1b2c3')
  })
});

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});
