import TableDonate from "@/components/Donate/TableDonate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TableCloset from "@/components/SendTrade/TableCloset";
import TableTrade from "@/components/SendTrade/TableTrade";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HandHeart, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Thanks() {

  const navigate = useNavigate();

  function handleHome() {
      navigate("/home");
  }
  return(
    <>
      <Header />
      <div className="flex max-w-[1400px] m-auto justify-center items-center">
        <div className="flex flex-col items-center mt-40 mb-72">
        <HandHeart className="text-primary size-40" />
            <h1 className="text-6xl font-semibold mb-5">Muito Obrigado pela sua Doação!!</h1>
            <h3 className="text-2xl font-semibold">Seu apoio faz toda a diferença. Juntos, estamos construindo um futuro melhor.</h3>
            <Button onClick={handleHome} className="mt-4">Voltar para a Home</Button>
        </div>
        
      </div>
    
      <Footer />
    </>
  );
}
