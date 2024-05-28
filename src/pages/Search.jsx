import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { clothes } from '@/mock/cardProducts';
import Footer from '@/components/Footer';

export function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const returnHome = () => {
    navigate('/Home');
  };

  const filteredData = clothes.filter(item =>
    (!query || item.type.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <Header />
      <div className="mt-16 mb-16 flex flex-col max-w-[1400px] m-auto">
        <h1 className="text-4xl font-semibold mb-10 text-primary">
          Resultado de pesquisa por: {query}
        </h1>
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {filteredData.map((searchCloth) => (
              <div key={searchCloth.id} className="min-w-[250px] max-w-[250px] border-primary border rounded-lg">
                <Card className="rounded-none border-none bg-card-none shadow-none">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-3 left-3 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                          <Heart size={22} className="text-primary" />
                        </Badge>
                      </div>
                      <img className="w-full h-[250px] rounded-t-lg" src={searchCloth.image} alt={searchCloth.name} />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <h3>{searchCloth.name}</h3>
                      <p>{searchCloth.size}</p>
                      <Button className="bg-white text-primary border border-primary">Ver mais</Button>
                      <Button className="text-white hover:bg-white hover:text-primary border border-primary">Enviar proposta</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl">Nenhum produto encontrado</p>
        )}
        <div className='flex justify-center'>
          <Button className="mt-10 text-white hover:bg-white hover:text-primary border border-primary w-[250px]" onClick={returnHome}>
            Voltar ao início
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
};
