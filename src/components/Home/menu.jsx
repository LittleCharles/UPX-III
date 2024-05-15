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
import { ArrowRightLeft, MessageSquareCode, Pencil, Shirt, LogOut } from "lucide-react"; 

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
        <DropdownMenuItem  to="/profile" className="text-sm">
          <Pencil className="size-4 mr-2"/>Editar Perfil</DropdownMenuItem>
        <DropdownMenuItem>
          <Shirt className="size-4 mr-2" />
          Armario
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/chat-history">
            <ArrowRightLeft className="size-4 mr-2" />
            Propostas de trocas
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/chat">
            <MessageSquareCode className="size-4 mr-2" />
            Mensagens
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/Login">
            <LogOut className="size-4 mr-2" />
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
