import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowRightLeft, MessageSquareCode, Pencil, Shirt } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  
  const navigate = useNavigate();

  function handleCloset() {
      navigate("/armario");
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel className="text-sm">Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm">
          <Pencil className="size-4 mr-2" />
          Editar Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloset}>
          <Shirt className="size-4 mr-2" />
          Armario
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowRightLeft className="size-4 mr-2" />
          Propostas de trocas
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquareCode className="size-4 mr-2" />
          Mensagens
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
