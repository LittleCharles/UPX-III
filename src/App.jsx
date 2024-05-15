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
import { ProfilePage } from "./pages/profile/ProfilePage"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/produto" element={<ProductDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat-history" element={<ChatHistory />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
