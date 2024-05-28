import DrawerRegister from "@/components/Closet/DrawerRegister";
import FormsRegister from "@/components/Closet/DrawerRegister";
import ProductDetailsCloset from "@/components/Closet/ProductDetailsCloset";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TableCloset from "@/components/SendTrade/TableCloset";
import TableTrade from "@/components/SendTrade/TableTrade";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Closet() {


  return (
    <>
      <Header />
      <h1 className="text-center pt-10 mb-10 text-5xl text-primary font-semibold">Armário</h1>
      <div className="flex max-w-[1400px] m-auto justify-center">
        <TableCloset/>
        <ArrowRight className="text-primary size-36 mx-4"/>
        <ProductDetailsCloset/>
      </div>
      <Footer />
    </>
  );
}
