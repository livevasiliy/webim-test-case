import axios from 'axios'

export default class AuthService {
  async getAuthToken (authCredentials) {
    return await axios({
      method: 'post',
      url: 'api-token-auth/',
      data: authCredentials,
    })
      .then((response) => {
        return {
          token: response.data.token,
          status: response.status
        }
      })
      .catch((error) => {
        return {
          errorMsg: error.response.data.non_field_errors,
          status: error.response.status
        }
      })
  }
}
