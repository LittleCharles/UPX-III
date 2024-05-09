import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerHome from "@/components/Home/bannerHome";
import CardBrands from "@/components/Home/cardBrands";
import CardProducts from "@/components/Home/cardProducts";
import CarouselHome from "@/components/Home/carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col max-w-[1400px] m-auto justify-center gap-10 mb-40">
        <div >
          <CarouselHome />
        </div>
        <div>
          <h2 className="text-primary font-bold text-3xl mb-4">Roupas em destaques</h2>       
          <CardProducts />
        </div>

        <div >
          <h2 className="text-primary font-bold text-3xl mb-4">Principais Marcas</h2>
          <div className="flex">
            <CardBrands   />
          </div>
          <div >
            <BannerHome />
          </div>
        </div>
        <div>
          <h2 className="text-primary font-bold text-3xl mb-4">Novidades</h2>       
          <CardProducts />
        </div>
      </div>
      <Footer/>
    </>
  );
}
