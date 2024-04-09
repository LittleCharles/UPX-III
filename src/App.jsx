import { Button } from "./components/ui/button"
import { Login } from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./pages/Register"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
