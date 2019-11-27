const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/';
  }

  async getAllUsers() {
    const response = await this.get('users');
    return Array.isArray(response) ? response : [];
  }

  async getUserById({ userId }) {
    const response = await this.get(`users/${userId}`);
    return response;
  }

  async getUserByIds({ userIds }) {
    return Promise.all(userIds.map(userId => this.getUserById({ userId })));
  }

  async countUsersByPermission({ permission }) {
    const response = await this.getAllUsers();
    const responsePermission = response.filter(
      data => data.permission === permission
    );
    return {
      permission,
      count: responsePermission.length
    };
  }

  async addUser({ params }) {
    console.log(params);
    try {
      const { name, email, permission } = params;
      const response = await this.post('users', {
        name,
        email,
        permission
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserAPI;
