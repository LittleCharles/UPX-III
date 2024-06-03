import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowRightLeft, DoorOpen, MessageSquareCode, Pencil, Shirt } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  
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
        <DropdownMenuItem as={Link} to="/profile">
          <Pencil className="size-4 mr-2" />
          Editar Perfil
        </DropdownMenuItem>
        <DropdownMenuItem as={Link} to="/armario">
          <Shirt className="size-4 mr-2" />
          Armario
        </DropdownMenuItem>
        <DropdownMenuItem as={Link} to="/propostas-de-trocas">
          <ArrowRightLeft className="size-4 mr-2" />
          Propostas de trocas
        </DropdownMenuItem>
        <DropdownMenuItem as={Link} to="/chat">
          <MessageSquareCode className="size-4 mr-2" />
          Mensagens
        </DropdownMenuItem>
        <DropdownMenuItem as={Link} to="/">
          <DoorOpen className="size-4 mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
