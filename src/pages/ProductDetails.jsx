import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CardBrands from "@/components/Home/cardBrands";
import CardProducts from "@/components/Home/cardProducts";
import CarouselHome from "@/components/Home/carousel";
import CardProductDetails from "@/components/ProductDetails/cardProductDetails";
import CarouselProduct from "@/components/ProductDetails/carouselProduct";

export default function ProductDetails() {
  return (
    <>
      <Header />
      <div className="flex max-w-[1400px] m-auto  gap-10 mb-40">
        <CarouselProduct/>
        <div>
          <h1>Calça Feminina Wide Jeans Cintura</h1>
          <p>Calça wide jeans feminina, tamanho 44, fechamento em botões, jeans grosso e sem elasticidade, com fios puxados na barra, cintura super alta da marca Equivoco jeans. cintura: 86 cm quadril: 112 cm gancho: 33 cm comprimento: 102 cm</p>
          <div><span className="bg-black w-2 h-2 text-white p-1">TAGS</span><span className="bg-black w-2 h-2 text-white p-1">TAGS</span></div>
          <CardProductDetails/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
