import PocketBaseInstance from "../lib/pocketbase";
const pocketbase = PocketBaseInstance();
export default class Auth {
  /**
   * get token from local storage
   *  @returns {string}
   */
  static token() {
    return pocketbase.authStore.token;
  }
  /**
   * Get user authentication
   * @returns {object}
   */
  static authentication() {
    return Promise.resolve({
      status: pocketbase.authStore.isValid,
      user: pocketbase.authStore.model ?? {},
    });
  }

  /**
   * logout user
   */
  static logout() {
    pocketbase.authStore.clear();
  }

  /**
   * authenticate user
   * @param {string} identity
   * @param {string} password
   * @returns {Promise<object>}
   */
  static async login({ identity, password }) {
    try {
      const user = await pocketbase
        .collection("users")
        .authWithPassword(identity, password);
      return {
        status: true,
        user: user,
      };
    } catch {
      return {
        status: false,
        error: "Usuario o contraseña incorrecta",
      };
    }
  }
}
