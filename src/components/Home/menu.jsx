import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ArrowRightLeft, MessageSquareCode, Pencil, Shirt } from "lucide-react"

  

export default function Menu() {
  return (
    
    <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
  <DropdownMenuLabel className="text-sm">Menu</DropdownMenuLabel>
  <DropdownMenuSeparator/>
    <DropdownMenuItem  to="/profile" className="text-sm"><Pencil className="size-4 mr-2"/>Editar Perfil</DropdownMenuItem>
    <DropdownMenuItem><Shirt className="size-4 mr-2" />Armario</DropdownMenuItem>
    <DropdownMenuItem><ArrowRightLeft className="size-4 mr-2"/>Propostas de trocas</DropdownMenuItem>
    <DropdownMenuItem><MessageSquareCode className="size-4 mr-2"/>Mensagens</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


  )
}
