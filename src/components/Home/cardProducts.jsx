import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Heart } from "lucide-react"
import { clothes } from "@/mock/cardProducts"
import { useNavigate } from "react-router-dom"
  

export default function CardProducts() {
  const navigate = useNavigate();

  function handleTrade() {
      navigate("/proposta");
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      {clothes.map((cloth) => (
        <div key={cloth.id} className="min-w-[250px] max-w-[250px] border-primary border rounded-lg">
          <Card className="rounded-none border-none bg-card-none shadow-none">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-3 left-3 z-50">
                  <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                    <Heart size={22} className="text-primary" />
                  </Badge>
                </div>
                <img className="w-full h-[250px] rounded-t-lg" src={cloth.image} alt={cloth.name} />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3>{cloth.name}</h3>
                <p>{cloth.size}</p>
                <Button className="bg-white text-primary border border-primary">Ver mais</Button>
                <Button className="text-white hover:bg-white hover:text-primary border border-primary" onClick={handleTrade}>Enviar proposta</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
