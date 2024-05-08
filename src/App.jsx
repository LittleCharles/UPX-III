import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Chat } from "./pages/Chat";
import { ChatHistory } from "./pages/ChatHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<ProductDetails />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/historico" element={<ChatHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
