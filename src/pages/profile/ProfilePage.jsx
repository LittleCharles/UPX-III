import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import ProfilePicture from "./ProfilePicture";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ProfilePage() {
  const [nome, setNome] = useState("Little");
  const [sobrenome, setSobrenome] = useState("Charles");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("Sorocaba");
  const [estado, setEstado] = useState("SP");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [bio, setBio] = useState("");

  function alterarNome(e) {
    setNome(e.target.value);
  }

  function alterarEndereco(e) {
    setEndereco(e.target.value);
  }

  function alterarCidade(e) {
    setCidade(e.target.value);
  }

  function alterarEstado(e) {
    setEstado(e.target.value);
  }

  function alterarTelefone(e) {
    setTelefone(e.target.value);
  }

  function alterarEmail(e) {
    setEmail(e.target.value);
  }

  function alterarCpf(e) {
    setCpf(e.target.value);
  }

  function alterarBio(e) {
    setBio(e.target.value);
  }

  function alterarSobrenome(e) {
    setSobrenome(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission
  }

  const navigate = useNavigate();

  function handleEdit() {
    toast.success(
      "Perfil editado com sucesso"
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }

  return (
    <>
      <Header />
      <h1 className="text-center pt-10 mb-10 text-5xl text-primary font-semibold">
        Edição de Perfil
      </h1>
      <div className="flex gap-36 max-w-[1400px] m-auto justify-center">
        <div className="rounded-lg bg-primary w-[40%] p-20 h-[700px] text-center text-white items-center justify-center mb-14">
          <ProfilePicture />
          <h1 className="my-2 text-2xl">{`${nome} ${sobrenome}`}</h1>

          <p className="text-2xl mb-2 font-normal">{`${cidade} - ${estado}`}</p>
          <p className="text-2xl font-normal">{bio}</p>
        </div>
        <div className="w-[50%]">
          <form
            className="border-2 border-primary p-4 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Nome</label>
                <Input value={nome} onChange={alterarNome} />
              </div>
              <div>
                <label>Sobrenome</label>
                <Input value={sobrenome} onChange={alterarSobrenome} />
              </div>
              <div>
                <label>Email</label>
                <Input value={email} type="email" onChange={alterarEmail} />
              </div>
              <div>
                <label>Telefone</label>
                <Input value={telefone} type="tel" onChange={alterarTelefone} />
              </div>
              <div>
                <label>Endereço</label>
                <Input value={endereco} onChange={alterarEndereco} />
              </div>
              <div>
                <label>Cidade</label>
                <Input value={cidade} onChange={alterarCidade} />
              </div>
              <div>
                <label>Estado</label>
                <Input value={estado} onChange={alterarEstado} />
              </div>
              <div>
                <label>CPF</label>
                <Input value={cpf} onChange={alterarCpf} />
              </div>
            </div>
            <div className="mt-4">
              <label>Bio</label>
              <Textarea value={bio} onChange={alterarBio} />
            </div>
            <Button onClick={handleEdit} type="submit" className="mt-4 w-[100%]">
              Salvar
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
