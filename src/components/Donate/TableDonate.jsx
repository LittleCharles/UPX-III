import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clothes } from "@/mock/cardProducts";
import { SquarePlus } from "lucide-react";

export default function TableDonate() {
  const firstCloth = clothes[0];
  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="border-2 border-primary p-2 h-fit">
      <h2 className="ml-2 text-2xl font-medium text-primary">Suas Roupas:</h2>
        <Table className="w-[600px] border-separate border-spacing-2">
          <TableHeader>
            <TableRow>
           
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
            <TableCell className="p-0 text-center h-[100px] w-[100px]">
                  <img src={firstCloth.image} alt={firstCloth.name} className="object-cover h-full w-full rounded" />
                </TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
             
              
            </TableRow>
            <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
            <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
              
            </TableRow>
          </TableBody>
        </Table>
        </div>
         <div className="border-2 border-primary p-2 h-fit">
         <h2 className="ml-2 text-2xl font-medium text-primary">Enviar para o armario da TradeFIT</h2>
        <Table className="w-[600px] border-separate border-spacing-2">
          <TableHeader>
            <TableRow>
           
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
              <TableCell className="p-0 text-center h-[100px] w-[100px]">
        
              </TableCell>
              <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
              
            </TableRow>
            <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
            <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
                <TableCell className=" h-[100px] w-[100px]"></TableCell>
              
            </TableRow>
          
          
          
          
          </TableBody>
        </Table>
        </div>
        </div>
    </>
  );
}
