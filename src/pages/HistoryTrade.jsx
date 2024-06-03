import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoryTableTrade from "@/components/HistoryTrade/HistoryTableTrade";
import NotificationTrade from "@/components/HistoryTrade/NotificationTrade";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function HistoryTrade() {

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
      <div className="flex max-w-[1400px] m-auto justify-center items-center">
      <Tabs className="flex flex-col items-center pt-10" defaultValue="trade">
  <TabsList>
    <TabsTrigger value="trade">Propostas Recebidas</TabsTrigger>
    <TabsTrigger value="history">Historico de Trocas</TabsTrigger>
  </TabsList>
  <TabsContent value="trade"><NotificationTrade/></TabsContent>
  <TabsContent value="history"><HistoryTableTrade/></TabsContent>
</Tabs>

      </div>
      
      <Footer />
    </>
  );
}
