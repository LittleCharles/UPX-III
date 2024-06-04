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

export default function NotificationTrade() {
  const cards = Array.from({ length: 6 }, (_, index) => (
    <Card key={index} className="rounded-none border-none bg-card-none shadow-none">
      <CardContent className="p-0">
        <div className="border-2 border-primary rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-primary mb-2">Proposta de Troca Recebida</h2>
          <h3 className="mb-2">Alguém se interessou por uma roupa sua. Dê uma olhada!</h3>
          <TableNotificationTrade />
        </div>
      </CardContent>
    </Card>
  ));

  return (
    <>
    <h2 className="text-center pt-5 mb-10 text-5xl text-primary font-semibold">Propostas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
      {cards}
    </div>
    </>
  );
}
