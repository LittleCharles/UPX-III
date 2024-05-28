import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom";
  

export default function CardProductDetails() {

  
  const navigate = useNavigate();

  function handleTrade() {
      navigate("/proposta");
    }

  return (
    <div className="border-primary border rounded-lg p-3 mt-10">
    <Card className="rounded-none border-none bg-card-none shadow-none">
    <CardContent className="p-0">
      <div className="border-b border-primary pb-4 mb-5">
        <p>Troca</p>
        <p>Combinar entrega com o usuario</p>
      </div>
      <div>
        <Button onClick={handleTrade} className="w-full hover:bg-white hover:text-primary border border-primary">Enviar Proposta</Button>
      </div>
    </CardContent>
  </Card>
  </div>

  
  )
}
