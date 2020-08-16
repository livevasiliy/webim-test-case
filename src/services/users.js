import axios from 'axios'

export default class UserService {

  async fetchAllUsers () {
    return await axios
      .get('api/v1/users/')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
