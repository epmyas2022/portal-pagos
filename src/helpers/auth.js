export default class Auth {
  /**
   * get token from local storage
   *  @returns {string}
   */
  static token() {
    return localStorage.getItem("token");
  }
  /**
   * Get user authentication
   * @returns {object}
   */
  static authentication() {
    //TODO: return user from token
    return {
        status: true,
        user: {}
    };
  }
}
