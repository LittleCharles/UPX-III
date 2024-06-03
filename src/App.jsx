
import { Login } from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./pages/Register"
import Home from "./pages/Home"
import Header from "./components/Header"
import ProductDetails from "./pages/ProductDetails"
import SendTrade from "./pages/SendTrade"
import Closet from "./pages/Closet"
import Donate from "./pages/Donate"
import Thanks from "./pages/Thanks"
import ForgotPassword from "./pages/ForgotPassword"
import { Chat } from "./pages/Chat"
import { ChatHistory } from "./pages/ChatHistory"
import { ProfilePage } from "./pages/profile/ProfilePage"
import { Search } from "./pages/Search"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/produto" element={<ProductDetails/>}/>
      <Route path="/proposta" element={<SendTrade/>}/>
      <Route path="/armario" element={<Closet/>}/>
      <Route path="/doacao" element={<Donate/>}/>
      <Route path="/obrigado" element={<Thanks/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat-history" element={<ChatHistory />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
