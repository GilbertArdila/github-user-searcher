import { API } from "../api/api";
import axios from "axios";

const getGitHubUser =async (user) => {
  try {
    const response = await axios.get(`${API}${user}`)
    return response.data
  } catch (error) {
    return console.log(error)
  }
};

const getRepos = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return console.log(error)
    }
}

export {getGitHubUser,getRepos}