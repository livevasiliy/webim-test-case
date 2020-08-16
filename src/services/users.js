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

  async fetchUserById(userId) {
    return await axios
      .get(`api/v1/users/${userId}/`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  async createUser(userData) {
    return await axios
      .post('api/v1/users/', userData)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  async updateUser(userId, userData) {
    return await axios
      .put(`/api/v1/users/${userId}/`, userData)
      .then((response) => {
        return response.data
      })
  }
}
