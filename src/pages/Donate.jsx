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
import { HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Donate() {

  const navigate = useNavigate();

  function handleDonate() {
    toast.success(
      "Doação enviada com sucesso"
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }
  return (
    <>
      <Header />
      <h1 className="text-center pt-10 mb-10 text-5xl text-primary font-semibold">Doação</h1>
      <div className="flex max-w-[1400px] m-auto justify-center items-center">
        <TableCloset/>
        <HeartHandshake className="text-primary size-36 mx-4" />
        <TableDonate/>
       
      </div>
       <div className="flex max-w-[1400px] m-auto justify-end">
      <Button onClick={handleDonate} className="w-[620px] mt-4 mb-10">Enviar Doação</Button>
      </div>
      
      <Footer />
    </>
  );
}
