import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil, SquarePlus } from "lucide-react";
import { FormEdit } from "./FormsEdit";
import { cn } from "@/lib/utils";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export default function DrawerEdit() {
  return (
    <Sheet>
      <SheetTrigger>
      <button
            className={cn(
              "flex  items-center text-sm",
              (<DropdownMenuItem />).props.className
            )}
          >
            <Pencil className="m-2 size-4" />
            Editar Roupa
          </button>
      </SheetTrigger>
      <SheetContent className="w-[640px]">
        <SheetHeader>
          <SheetTitle>Editar Roupa</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para editar sua roupa
          </SheetDescription>
          <FormEdit />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
