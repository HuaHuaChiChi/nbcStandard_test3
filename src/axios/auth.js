import axios from "axios";

export const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sineUp = async (id, password, nickname) => {
  console.log(id);
  try {
    const response = await authApi.post("/register", {
      id,
      password,
      nickname,
    });
    return response;
  } catch (error) {
    alert(error);
    return error;
  }
};

///login?expiresIn=10m  <= 유효기간용
export const login = async (id, password) => {
  try {
    const response = await authApi.post("login", {
      id,
      password,
    });
    return response;
  } catch (error) {
    alert(error);
    return error;
  }
};

authApi.authApi.interceptors.request.use();
