import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import { sineUp } from "../../axios/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  // console.log(id);

  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await sineUp(id, password, nickname);
          try {
            const { success } = response.data;
            if (success) {
              alert("회원가입 성공 로그인 하셈");
              navigate("/login");
            } else {
              alert("회원가입 실패");
              return;
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
          <label htmlFor="nickname">nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
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

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
