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
  MessageSquareCode,
  Pencil,
  Shirt,
} from "lucide-react";
import DrawerEdit from "./DrawerEdit";

export default function MenuCloset() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical className="text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem asChild className="text-sm">
          <DrawerEdit/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowRightLeft className="size-4 mr-2" />
          Doar
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Shirt className="size-4 mr-2" />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
