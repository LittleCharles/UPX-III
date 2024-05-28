import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../assets/logo banner.png";
import image2 from "../../assets/loja banner.png";
import image3 from "../../assets/roupas inverno.png";

const imageUrls = [image1, image2, image3];

export default function CarouselHome() {
  return (
    <Carousel className="w-full mt-16">
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="h-[500px]">
                <CardContent className="flex aspect-square items-center justify-center p-0 h-[500px] w-full">
                  <img
                    className="rounded-lg"
                    src={url}
                    alt={`Imagem ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
