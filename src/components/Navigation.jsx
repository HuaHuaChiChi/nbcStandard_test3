import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  console.log(token);

  const handleLogout = () => {
    if (token) {
      localStorage.clear();
      alert("정상적으로 로그아웃 되었습니다. 다시 로그인해주세요.");
    } else {
      return;
    }
  };

  const handleLogin = () => {
    if (!token) {
      navigate("/login");
    } else {
      alert("이미 로그인중입니다.");
      navigate("/");
      return;
    }
  };

  return (
    <nav>
      {token ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인하러가기</button>
      )}

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <hr />

        {/* 로그인 여부가 상관없는 메뉴 */}
        <p>❗️ 로그인 여부가 상관없는 메뉴</p>
        <li>
          <Link>홈 메뉴로</Link>
        </li>
        <li>
          <Link>검색페이지로</Link>
        </li>
        <li>
          <Link>권한테스트 페이지로</Link>
        </li>

        <hr />

        {/* 로그인이 반드시 필요한 메뉴 */}
        <p>❗️ 로그인이 반드시 필요한 메뉴</p>
        <li>
          <Link>1번 유저의 정보</Link>
        </li>
        <li>
          <Link>2번 유저의 정보</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
