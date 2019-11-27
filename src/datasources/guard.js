class Guard {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  validateUser() {
    console.log(this.accessToken, 'AccessToken');
  }
}

module.exports = Guard;
