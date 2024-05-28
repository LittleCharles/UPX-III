import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FormRegister } from "./FormsRegister";
import { SquarePlus } from "lucide-react";

export default function DrawerRegister() {
  return (
    <Sheet>
      <SheetTrigger>
        <SquarePlus className="text-primary size-10" />
      </SheetTrigger>
      <SheetContent className="w-[640px]">
        <SheetHeader>
          <SheetTitle>Cadastrar Roupa</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para cadastrar sua roupa
          </SheetDescription>
          <FormRegister />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
