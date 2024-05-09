import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import { brands } from "@/mock/Brands"
  

export default function CardBrands() {
  return (
    <div className="grid grid-cols-10 gap-10">
      {brands.map((brand) => (
        <div key={brand.id} className="border-primary border rounded-[50px] overflow-hidden flex items-center">
          <Card className="bg-card-none shadow-none">
            <CardContent className="p-0">
              <img className="w-full h-full rounded-[50px]" src={brand.logo} alt={brand.name} />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
