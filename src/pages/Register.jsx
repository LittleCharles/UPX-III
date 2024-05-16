import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { toast } from "sonner";



export function Register() {

    const navigate = useNavigate();

    function handleReturnHome() {
        navigate("/Login");
      }

      function handleRedirect() {
        toast.success("Conta criada com sucesso.");
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
          <div className="md:max-w-[70%] w-full  bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
            <div className="flex-1 flex flex-col md:flex-row h-full">
              <div className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 items-center justify-center">
              <img src="src/assets/Logo Transparente.png" alt="logo"/>
              </div>
              <form className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 bg-white rounded-tr-[2.5rem] rounded-br-[5rem] rounded-tl-[5rem] justify-center">
                <div className="flex flex-col items-center px-5 py-8 w-full">
                  <span className="text-bg-primary text-4xl text-center font-normal">
                    Crie sua conta!
                  </span>
                  <span className="text-slate-500 text-lg text-center font-normal mt-4">
                    Preencha os campos abaixo para criar a sua conta em nossa
                    plataforma.
                  </span>
                  <div className="flex flex-col gap-8 w-full mt-10">
                    <Input placeholder="Nome Completo" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" type="password" />
                    <Input placeholder="Confirme sua senha" type="password" />
                  </div>
                  <span
                    className="text-bg-primary text-base cursor-pointer underline text-end w-full mt-2"
                    onClick={handleReturnHome}
                  >
                    Acessar minha conta
                  </span>
                  <Button
                    variant="default"
                    type="button"
                    className="bg-primary text-white text-lg w-full rounded-[0.3125rem] h-14 mt-10"
                    onClick={handleRedirect}
                  >
                    Criar conta
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
