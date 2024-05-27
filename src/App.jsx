import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Chat } from "./pages/Chat";
import { ChatHistory } from "./pages/ChatHistory";
import { Closet } from "./pages/Closet";
import { RegisterClothes } from "./pages/RegisterClothes";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { Donation } from "./pages/Donation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-clothes" element={<RegisterClothes />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/produto" element={<ProductDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat-history" element={<ChatHistory />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;