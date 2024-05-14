
import { Login } from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./pages/Register"
import Home from "./pages/Home"
import Header from "./components/Header"
import ProductDetails from "./pages/ProductDetails"
import { ProfilePage } from "./pages/profile/ProfilePage"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/produto" element={<ProductDetails/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
