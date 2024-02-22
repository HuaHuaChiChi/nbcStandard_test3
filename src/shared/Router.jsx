import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/non-auth/LoginPage";
import SearchPage from "../pages/SearchPage";
import SingupPage from "../pages/non-auth/SignupPage";
import TestPage from "../pages/TestPage";
import UserProfilePage from "../pages/auth/UserProfilePage";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/testPage" element={<TestPage />} />
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        <Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />
        </Route>

        {/* 로그인이 필요한 라우터 */}
        <Route>
          <Route path="/user/:userId" element={<UserProfilePage />} />
        </Route>

        {/* 404 Not Found */}
        <Route />
      </Routes>
    </Router>
  );
}
