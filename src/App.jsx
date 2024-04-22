import { Button } from "./components/ui/button";
import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
