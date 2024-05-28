import Header from "@/components/Header";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Donation() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  const itemsData = [
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
    }
  ];

  const toggleItemSelection = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const toggleDetails = (index) => {
    setShowDetailsIndex(showDetailsIndex === index ? null : index);
  };

  const donateItem = (index) => {
    console.log(`Item ${index + 1} doado!`);
  };

  return (
    <>
      <Header />
      <div className="m-4">
        <div className="grid grid-cols-4 gap-4">
          {itemsData.map((item, index) => (
            <div key={index} className="border rounded overflow-hidden shadow-lg relative">
              <div className="border-b p-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {item.images.map((image, imgIndex) => (
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
                <h3 className="text-xs">Nome: {item.name}</h3>
                <p className="text-xs">Tamanho: {item.size}</p>
                <p className="text-xs">Cor: {item.color}</p>
                <p className="text-xs">Marca: {item.brand}</p>
                <p className="text-xs">Gênero: {item.gender}</p>
                <p className="text-xs">Tipo: {item.type}</p>

                <div className="absolute top-0 right-0 mt-2">
                  <button
                    className={`bg-primary hover:bg-white text-white hover:text-green-500 py-1 px-2 rounded mt-1 text-xs ${selectedItems.includes(index) ? "bg-green-500" : ""}`}
                    style={{ marginRight: "8px" }}
                    onClick={() => toggleItemSelection(index)}
                  >
                    {selectedItems.includes(index) ? "Selecionado" : "Selecionar"}
                  </button>
                  <button
                    className="bg-primary hover:bg-white text-white hover:text-green-500 py-1 px-2 rounded mt-1 text-xs"
                    style={{ marginRight: "8px" }}
                    onClick={() => toggleDetails(index)}
                  >
                    Detalhes
                  </button>
                </div>
              </div>
              {showDetailsIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b-lg">
                  <p className="text-sm">Detalhes adicionais sobre o item...</p>
                  <button
                    className="block mt-2 bg-primary hover:bg-white text-white hover:text-green-500 py-1 px-2 rounded text-xs"
                    onClick={() => donateItem(index)}
                  >
                    Doar Item
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
