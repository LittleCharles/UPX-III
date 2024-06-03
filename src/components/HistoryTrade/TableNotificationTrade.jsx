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
import { ArrowDownUp, SquarePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function TableNotificationTrade() {
  const firstCloth = clothes[0];

  const navigate = useNavigate();

  function handleTrade(){
    toast.success("Troca aceita com sucesso!");
    setTimeout(() => {
      navigate("/chat");
    }, 1000);
  }

  function handleRefuseTrade(){
    toast.success("Troca recusada com sucesso!");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }


  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Ver mais</Button>
        </DialogTrigger>
        <DialogContent className="max-w-fit">
          <div className="flex flex-col">
            <div className="border-2 border-primary p-2 h-fit">
              <h2 className="ml-2 text-2xl font-medium text-primary">
                Suas Roupas:
              </h2>
              <Table className="w-[600px] border-separate border-spacing-2">
                <TableHeader>
                  <TableRow></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
                    <TableCell className="p-0 text-center h-[100px] w-[100px]">
                      <img
                        src={firstCloth.image}
                        alt={firstCloth.name}
                        className="object-cover h-full w-full rounded"
                      />
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
            <ArrowDownUp className="text-primary size-24 mx-4 self-center" />
            <div className="border-2 border-primary p-2 h-fit">
              <h2 className="ml-2 text-2xl font-medium text-primary">
                Thiago Roupas:
              </h2>
              <Table className="w-[600px] border-separate border-spacing-2">
                <TableHeader>
                  <TableRow></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-gray-300 rounded-lg hover:bg-gray-300">
                    <TableCell className="p-0 text-center h-[100px] w-[100px]">
                      <img
                        src="https://pbs.twimg.com/media/FmYpz_CXgAEK5mf.jpg:large"
                        alt=""
                        className="object-cover h-full w-full rounded"
                      />
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
          <div className="flex gap-8">
            <Button onClick={handleTrade} className="w-[50%] bg-green-500 text-white border-2 border-green-500 hover:text-green-500 hover:bg-white">Aceitar</Button>
            <Button onClick={handleRefuseTrade} className="w-[50%] bg-red-500 text-white border-2 border-red-500 hover:text-red-500 hover:bg-white">Resusar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
