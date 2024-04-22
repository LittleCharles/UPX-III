import { Button } from "./components/ui/button";
import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import Chat from "./pages/Chat";
import { ProfilePage } from "./pages/profile/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;