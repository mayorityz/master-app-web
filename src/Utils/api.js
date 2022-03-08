import axios from 'axios'

const Query = async (endpoint, action, body) => {
  try {
    let Request = await axios({
      method: action,
      url: `${process.env.REACT_APP_NODEBACKEND}${endpoint}`,
      data: body,
    })
    return Request.data
  } catch (error) {
    return error.response.data
  }
}

export default Query
