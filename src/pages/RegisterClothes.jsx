// RegisterClothes.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function RegisterClothes() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([null, null, null]);
  const [imageError, setImageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.some(img => !img)) {
      setImageError("Por favor, envie uma imagem para cada campo.");
      return;
    }
    const newItem = { productName, size, gender, color, brand, type, images };
    toast.success("Roupas cadastradas com sucesso!");
    navigate("/clos");
  };

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
    setImageError("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <div className="md:max-w-[70%] w-full bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center p-5">
            <img src="src/assets/Logo Transparente.png" alt="Logo" />
          </div>
          <form
            className="md:w-1/2 p-5 bg-white rounded-tr-[40px] rounded-br-[80px] rounded-tl-[80px]"
            onSubmit={handleSubmit}
          >
            <span className="text-bg-primary text-4xl text-center font-normal block mb-8">
              Cadastrar Roupa
            </span>
            <div className="grid grid-cols-2 gap-6">
              <Input
                placeholder="Nome do Produto"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <Input
                placeholder="Tamanho"
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Selecione o Gênero</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outros">Outros</option>
              </select>
              <Input
                placeholder="Cor"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
              <Input
                placeholder="Marca"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              />
              {gender && (
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Selecione o Tipo</option>
                  {gender === "masculino" && (
                    <>
                      <option value="camisa">Camisa</option>
                      <option value="calça">Calça</option>
                      <option value="bermuda">Bermuda</option>
                    </>
                  )}
                  {gender === "feminino" && (
                    <>
                      <option value="blusa">Blusa</option>
                      <option value="saia">Saia</option>
                      <option value="vestido">Vestido</option>
                    </>
                  )}
                  {gender === "outros" && (
                    <>
                      <option value="unissex">Unissex</option>
                      <option value="acessório">Acessório</option>
                      <option value="outro">Outro</option>
                    </>
                  )}
                </select>
              )}
              {images.map((_, index) => (
                <input
                  key={index}
                  type="file"
                  className="col-span-2"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                  required
                />
              ))}
              {imageError && (
                <p className="text-red-500 text-xs mt-1 col-span-2">{imageError}</p>
              )}
            </div>
            <Button
              variant="default"
              type="submit"
              className="bg-primary text-white text-lg py-2 rounded-[5px] mt-4 w-1/2 mx-auto"
            >
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
