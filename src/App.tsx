import Login from "./pages/loginPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout";
import LogoutForm from "./components/logoutForm";
import SignupPage from "./pages/signupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="logout" element={<LogoutForm />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
