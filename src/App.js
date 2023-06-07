import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MessagePage from "./pages/MessagingPage/MessagePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/messages" element={<MessagePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
