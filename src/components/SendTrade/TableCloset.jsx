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
import { clothes as initialClothes } from "@/mock/cardProducts";
import { Badge, EllipsisVertical, Heart, SquarePlus } from "lucide-react";
import { useState } from "react";
import DrawerRegister from "../Closet/DrawerRegister";
import MenuCloset from "../Closet/MenuCloset";

export default function TableCloset() {
  const [clothes, setClothes] = useState(initialClothes);
  const [selectedCellIndex, setSelectedCellIndex] = useState(null);

  const handleCellSelect = (cellIndex) => {
    setSelectedCellIndex(cellIndex === selectedCellIndex ? null : cellIndex);
  };

  const handleDelete = (id) => {
    setClothes((prevClothes) =>
      prevClothes.map((item) =>
        item.id === id ? { id, isDeleted: true } : item
      )
    );
  };

  const rows = [];
  for (let i = 0; i < clothes.length; i += 5) {
    rows.push(clothes.slice(i, i + 5));
  }

  const renderEmptyCell = (key) => (
    <TableCell key={key} className="h-[100px] w-[100px]">
      <div className="flex justify-center">
        <DrawerRegister />
      </div>
    </TableCell>
  );

  return (
    <>
      <div className="border-2 border-primary p-2 h-fit">
        <h2 className="ml-2 text-2xl font-medium text-primary">Seu Armario:</h2>
        <Table className="w-[600px] border-separate border-spacing-2">
          <TableHeader>
            <TableRow>
              {/* Empty header */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-gray-300 rounded-lg hover:bg-gray-300"
              >
                {row.map((item, cellIndex) =>
                  item.isDeleted ? (
                    renderEmptyCell(`empty-${rowIndex * 5 + cellIndex}`)
                  ) : (
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
                        <MenuCloset onDelete={() => handleDelete(item.id)} />
                      </div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover h-full w-full rounded"
                      />
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
            {[...Array(3)].map((_, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-gray-300 rounded-lg hover:bg-gray-300"
              >
                {[...Array(5)].map((_, cellIndex) =>
                  renderEmptyCell(`extra-empty-${rowIndex * 5 + cellIndex}`)
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
