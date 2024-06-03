import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ArrowRightLeft,
  EllipsisVertical,
  HeartHandshake,
  MessageSquareCode,
  Pencil,
  Shirt,
  Trash2,
} from "lucide-react";
import DrawerEdit from "./DrawerEdit";
import { Link, useNavigate } from "react-router-dom";

export default function MenuCloset({ onDelete }) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical className="text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem asChild className="text-sm">
          <DrawerEdit/>
        </DropdownMenuItem>
        <DropdownMenuItem as={Link} to="/doacao">
          <HeartHandshake className="size-4 mr-2" />
          Doar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          <Trash2 className="size-4 mr-2" />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
