import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function Register() {
  const [accountType, setAccountType] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleReturnHome() {
    navigate("/Login");
  }

  function handleRedirect() {
    if (!accountType || !fullName || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    if (accountType === "pessoa-fisica" && cpf.length !== 11) {
      toast.error("Por favor, insira um CPF válido.");
      return;
    }

    if (accountType === "pessoa-juridica" && cnpj.length !== 14) {
      toast.error("Por favor, insira um CNPJ válido.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    toast.success("Conta criada com sucesso.");
    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <div className="md:max-w-[70%] w-full bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row h-full">
          <div className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 items-center justify-center">
            <img src="src/assets/Logo Transparente.png" alt="logo" />
          </div>
          <form className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 bg-white rounded-tr-[2.5rem] rounded-br-[5rem] rounded-tl-[5rem] justify-center">
            <div className="flex flex-col items-center px-5 py-8 w-full">
              <span className="text-bg-primary text-4xl text-center font-normal">
                Crie sua conta!
              </span>
              <span className="text-slate-500 text-lg text-center font-normal mt-4">
                Preencha os campos abaixo para criar a sua conta em nossa plataforma.
              </span>
              <div className="flex flex-col gap-4 w-full mt-8">
                <Input
                  placeholder="Nome Completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirme sua senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <select
                  className="border rounded-md py-2 px-3"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="pessoa-fisica">Pessoa Física</option>
                  <option value="pessoa-juridica">Pessoa Jurídica</option>
                </select>

                {accountType === "pessoa-fisica" && (
                  <Input
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 11))}
                    maxLength={11}
                  />
                )}
                {accountType === "pessoa-juridica" && (
                  <Input
                    placeholder="CNPJ"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value.replace(/\D/g, '').slice(0, 14))}
                    maxLength={14}
                  />
                )}
              </div>
              <span className="text-bg-primary text-base cursor-pointer underline text-end w-full mt-2" onClick={handleReturnHome}>
                Acessar minha conta
              </span>
              <Button variant="default" type="button" className="bg-primary text-white text-lg w-full rounded-[0.3125rem] h-14 mt-8" onClick={handleRedirect}>
                Criar conta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
