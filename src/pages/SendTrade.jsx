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
import { ArrowLeftRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SendTrade() {

  const navigate = useNavigate();

  function handleTrade() {
    toast.success(
      "Proposta enviada com sucesso"
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }
  return (
    <>
      <Header />
      <h1 className="text-center pt-10 mb-10 text-5xl text-primary font-semibold">Proposta de Troca</h1>
      <div className="flex max-w-[1400px] m-auto justify-center items-center">
        <TableCloset/>
        <ArrowLeftRight className="text-primary size-36 mx-4" />
        <TableTrade/>
       
      </div>
       <div className="flex max-w-[1400px] m-auto justify-end">
      <Button onClick={handleTrade} className="w-[620px] mt-4 mb-10">Enviar Proposta</Button>
      </div>
      
      <Footer />
    </>
  );
}
