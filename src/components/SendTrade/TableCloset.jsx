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
import { Badge, EllipsisVertical, Heart, SquarePlus } from "lucide-react";
import { useState } from "react";
import DrawerRegister from "../Closet/DrawerRegister";
import MenuCloset from "../Closet/MenuCloset";

export default function TableCloset() {
  const [selectedCellIndex, setSelectedCellIndex] = useState(null);

  const handleCellSelect = (cellIndex) => {
    setSelectedCellIndex(cellIndex === selectedCellIndex ? null : cellIndex);
  };

  const rows = [];
  for (let i = 0; i < clothes.length; i += 5) {
    rows.push(clothes.slice(i, i + 5));
  }

  const renderEmptyCells = (count) => {
    const cells = [];
    for (let i = 0; i < count; i++) {
      cells.push(
        <TableCell key={i} className="h-[100px] w-[100px]">
          <div className="flex justify-center">
            <DrawerRegister />
          </div>
        </TableCell>
      );
    }
    return cells;
  };

  return (
    <>
      <div className="border-2 border-primary p-2 h-fit">
        <h2 className="ml-2 text-2xl font-medium text-primary">Seu Armario:</h2>
        <Table className="w-[600px] border-separate border-spacing-2">
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px] text-center">Invoice</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Method</TableHead>
              <TableHead className="text-center">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-gray-300 rounded-lg hover:bg-gray-300"
              >
                {row.map((item, cellIndex) => (
                  <TableCell
                    key={item.id}
                    className={`p-0 h-[100px] w-[100px] relative ${
                      selectedCellIndex === rowIndex * 5 + cellIndex
                        ? "border-4 border-primary rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleCellSelect(rowIndex * 5 + cellIndex)}
                  >
                    <div className="bg-slate-200 bg-opacity-25 absolute right-2 top-2 z-50 rounded flex items-center">
                      <MenuCloset/>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover h-full w-full rounded"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {[...Array(3)].map((_, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-gray-300 rounded-lg hover:bg-gray-300"
              >
                {renderEmptyCells(5)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
