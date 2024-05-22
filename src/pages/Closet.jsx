
import Header from "@/components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Closet() {
  const [showMenuIndex, setShowMenuIndex] = useState(null);
  const [itemsData, setItemsData] = useState([
    {
      name: "Camiseta Hering Preta",
      size: "XXG",
      color: "Preta",
      brand: "Hering",
      gender: "Masculino",
      type: "Camiseta",
      images: [
        "src/assets/heringBasicaPretaUsada.jpeg",
        "src/assets/heringBasicaPretaCosta.jpeg",
        "src/assets/heringBasicaPreta.jpeg",
      ],
    },
    {
      name: "Camiseta Hering Amarela",
      size: "M",
      color: "Amarela",
      brand: "Hering",
      gender: "Masculino",
      type: "Camiseta",
      images: [
        "src/assets/heringBasicaAmarela.jpeg",
        "src/assets/heringBasicaAmarelaCosta.jpeg",
        "src/assets/heringBasicaAmarela.jpeg",
      ],
    },
    // Adicione mais itens conforme necessário
  ]);

  const toggleMenu = (index) => {
    setShowMenuIndex(showMenuIndex === index ? null : index);
  };

  const deleteItem = (index) => {
    if (window.confirm("Tem certeza que deseja excluir esta roupa?")) {
      setItemsData(itemsData.filter((_, i) => i !== index));
      setShowMenuIndex(null);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-end ml-32">
        <Link to="/register-clothes">
          <button className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px] bg-primary hover:bg-white text-white hover:text-green-500 font-sans py-2 px-4 rounded m-8 mr-8 mt-14">
            Cadastrar Roupas +
          </button>
        </Link>
      </div>
      <div className="m-4">
        <div className="grid grid-cols-4 gap-4">
          {itemsData.map((item, index) => (
            <div key={index} className="border rounded overflow-hidden shadow-lg relative">
              <div className="border-b p-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {item && item.images && item.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <img
                          className="w-full h-auto rounded-t-lg"
                          src={image}
                          alt={`Item ${index + 1} Image ${imgIndex + 1}`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
                  />
                  <CarouselNext
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
                  />
                </Carousel>
              </div>
              <div className="p-4">
                <h3 className="text-xs">Nome: {item && item.name}</h3>
                <p className="text-xs">Tamanho: {item && item.size}</p>
                <p className="text-xs">Cor: {item && item.color}</p>
                <p className="text-xs">Marca: {item && item.brand}</p>
                <p className="text-xs">Gênero: {item && item.gender}</p>
                <p className="text-xs">Tipo: {item && item.type}</p>

                <div className="absolute top-0 right-0 mt-2">
                  <button
                    className="bg-primary hover:bg-white text-white hover:text-green-500 py-1 px-2 rounded mt-1 text-xs"
                    style={{ marginRight: "8px" }}
                    onClick={() => toggleMenu(index)}
                  >
                    {/* Ícone de três pontos na vertical */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <circle cx="10" cy="5" r="2" />
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="10" cy="15" r="2" />
                    </svg>
                  </button>
                  {showMenuIndex === index && (
                    <div className="bg-white rounded-lg shadow-lg absolute mt-2 right-0">
                      {/* ... (Botões Editar e Doar - igual ao código original) ... */}
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full"
                        onClick={() => deleteItem(index)}
                      >
                        Excluir
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}