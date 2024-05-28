import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CardBrands from "@/components/Home/cardBrands";
import CardProducts from "@/components/Home/cardProducts";
import CarouselHome from "@/components/Home/carousel";
import CardProductDetails from "@/components/ProductDetails/cardProductDetails";
import CardProductsRelated from "@/components/ProductDetails/cardProductsRelated";
import CarouselProduct from "@/components/ProductDetails/carouselProduct";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProductDetails() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-[1400px] m-auto">
      <div className="flex max-w-[1400px] m-auto gap-40 mb-20 mt-16">
        <CarouselProduct />
        <div>
          <h1 className="text-5xl font-bold mb-4">Calça Sufgang</h1>
          <p>
            Calça wide jeans feminina, tamanho 44, fechamento em botões, jeans
            grosso e sem elasticidade, com fios puxados na barra, cintura super
            alta da marca Equivoco jeans. cintura: 86 cm quadril: 112 cm gancho:
            33 cm comprimento: 102 cm
          </p>
          <div className="flex gap-4 mt-3">
            <span className="bg-primary text-white p-2 rounded">Calça</span>
            <span className="bg-primary text-white p-2 rounded">Tam 40</span>
            <span className="bg-primary text-white p-2 rounded">Masculino</span>
          </div>
          <CardProductDetails />
          <div className="flex mt-10 items-center gap-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>LittleCharles Roupas</p>
              <p>Sorocaba - SP</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="mb-40">
      <h2 className="text-3xl text-primary font-semibold border-b-2 border-primary mb-6 pb-4">Produtos Relacionados</h2>
      <CardProductsRelated/>
      </div>
      </div>
    
      <Footer />
    </>
  );
}
