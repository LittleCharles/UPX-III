import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clothes } from "@/mock/cardProducts";
import { SquarePlus } from "lucide-react";
import { useState } from "react";

export default function ProductDetailsCloset() {

  return (
    <> 
    <div className="border-2 border-primary p-4 w-[620px] mb-10">
      <div>
      <img className="h-[450px] w-full" src="https://photos.enjoei.com.br/public/1200x1200/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTE0MjM4Mi81ZTc1YmYwZmMxYzc0NmYyNmFkZjg0YjEyNjZiN2VhNS5qcGc" alt="" />
      </div>
      <div className="border-t-2 border-primary mt-5 flex flex-col gap-2">
        <h2 className="mt-4 text-xl font-medium">Calça Sufgang</h2>
        <h2>Marca: Sufgang</h2>
        <h2>Tam: 40</h2>
        <h2>Cor: Preta</h2>
        <h3>Calça sufgang masculina, tamanho 40, fechamento em zíper e botão, tecido resistente e sem elasticidade, com costuras reforçadas e detalhes em pesponto, cintura média da marca StreetRise. Cintura: 82 cm Quadril: 104 cm Gancho: 30 cm Comprimento: 106 cm.</h3>
      </div>
        </div>
    </>
  );
}
