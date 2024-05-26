import Header from "@/components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function ClothesExchange() {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      user: {
        name: "Maria",
        location: "São Paulo",
      },
      itemOffered: {
        name: "Camiseta Adidas",
        size: "M",
        color: "Branca",
      },
      itemRequested: {
        name: "Calça Jeans",
        size: "38",
        color: "Azul",
      },
    },
    // Adicione mais propostas conforme necessário
  ]);

  return (
    <>
      <Header />
      <div className="m-4">
        <h2 className="text-xl font-bold mb-4">Propostas de Troca de Roupas</h2>
        {proposals.map((proposal) => (
          <div key={proposal.id} className="border rounded p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-bold">{proposal.user.name}</h3>
                <p className="text-sm text-gray-500">{proposal.user.location}</p>
              </div>
              <Link to={`/chat/${proposal.id}`}>
                <button className="bg-primary text-white px-4 py-2 rounded">Chat</button>
              </Link>
            </div>
            <div className="mb-2">
              <p><span className="font-bold">Oferece:</span> {proposal.itemOffered.name} - Tamanho: {proposal.itemOffered.size} - Cor: {proposal.itemOffered.color}</p>
              <p><span className="font-bold">Deseja:</span> {proposal.itemRequested.name} - Tamanho: {proposal.itemRequested.size} - Cor: {proposal.itemRequested.color}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}