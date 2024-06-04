import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Heart } from "lucide-react";
import { clothes } from "@/mock/cardProducts";
import { useNavigate } from "react-router-dom";
import TableNotificationTrade from "./TableNotificationTrade";
import TableHistoryTrade from "./TableHistoryTrade";

export default function HistoryTableTrade() {
  const cards = Array.from({ length: 6 }, (_, index) => {
    const isAccepted = index < 3;
    const borderColor = isAccepted ? "border-green-500" : "border-red-500";
    const proposalStatus = isAccepted ? "Proposta de Troca Aceita" : "Proposta de Troca Recusada";

    return (
      <Card key={index} className="rounded-none border-none bg-card-none shadow-none">
        <CardContent className="p-0">
          <div className={`border-2 ${borderColor} rounded-lg p-4`}>
            <h2 className="text-2xl font-semibold text-primary mb-2">{proposalStatus}</h2>
            <TableHistoryTrade />
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      <h2 className="text-center pt-5 mb-10 text-5xl text-primary font-semibold">Historico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {cards}
      </div>
    </>
  );
}
