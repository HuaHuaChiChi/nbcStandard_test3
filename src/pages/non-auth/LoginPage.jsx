import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import { login } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await login(id, password);
          try {
            const { accessToken, userId, nickname } = response.data;
            if (accessToken) {
              alert("로그인 성공! 메인페이지로 이동합니다.");
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("avatar", userId);
              localStorage.setItem("nickname", nickname);
              navigate("/");
            }
          } catch (error) {
            return;
          }
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
