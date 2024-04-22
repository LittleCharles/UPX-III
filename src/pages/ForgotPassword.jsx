import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export function ForgotPassword() {
  const navigate = useNavigate();

  function handleForgotPassword() {
    const email = document.getElementById("email").value;

    toast.success("Email de redefinição de senha enviado para " + email);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <div className="md:max-w-[70%] w-full bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row h-full">
          <div className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 items-center justify-center">
          <img src="src/assets/Logo Transparente.png" alt="logo"/>
          </div>
          <form className="flex-1 flex flex-col gap-3 p-5 bg-white rounded-tr-[40px] rounded-br-[80px] rounded-tl-[80px] justify-center">
            <div className="flex flex-col items-center px-5 py-8 w-full">
              <span className="text-bg-primary text-4xl text-center font-normal">
                Recuperar Senha
              </span>
              <p className="text-gray-600 text-sm mt-2">
                Insira seu endereço de email e enviaremos instruções para redefinir sua senha.
              </p>
              <Input id="email" placeholder="E-mail" type="email" />
              <Button
                variant="default"
                type="button"
                className="bg-primary text-white text-lg w-full rounded-[5px] h-14 mt-10"
                onClick={handleForgotPassword}
              >
                Enviar Email de Recuperação
              </Button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ForgotPassword;
