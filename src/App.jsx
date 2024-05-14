
import { Login } from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./pages/Register"
import Home from "./pages/Home"
import Header from "./components/Header"
import ProductDetails from "./pages/ProductDetails"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/produto" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
