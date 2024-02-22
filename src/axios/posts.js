import axios from "axios";

const postsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}`,
});

export default postsAxios;
