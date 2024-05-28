
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
