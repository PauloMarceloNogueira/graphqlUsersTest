module.exports = {
  Query: {
    users: (_, __, { dataSources }) => {
      console.log(dataSources.guard.validateUser());
      return dataSources.userAPI.getAllUsers();
    },
    user: (_, { id }, { dataSources }) =>
      dataSources.userAPI.getUserById({ userId: id }),
    countUsersByPermission: (root, { permission }, { dataSources }) =>
      dataSources.userAPI.countUsersByPermission({ permission })
  },
  Mutation: {
    addUser: async (root, { params }, { dataSources }) =>
      dataSources.userAPI.addUser({ params })
  }
};
