import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}`,
});

commentsAxios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    try {
      const response = await authApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "됐나???");
    } catch (error) {
      alert("로그인 토큰이 만료되었습니다.");
      localStorage.clear();
      return Promise.reject(error);
    }
  }
  return config;
});

commentsAxios.interceptors.response.use();

export default commentsAxios;
