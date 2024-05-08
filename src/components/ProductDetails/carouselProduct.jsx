import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselProduct() {
  return (
    <Carousel className="w-[650px]">
      <CarouselContent>
        <CarouselItem>
          <div>
            <Card className="h-[650px]">
              <CardContent className="flex aspect-square items-center justify-center p-0 h-[650px] w-[650px]">
                <img
                  className="rounded-lg w-full h-full"
                  src="https://djdo2py1q6zlg.cloudfront.net/magazine/wp-content/uploads/2021/11/HKG_1583_1400x500.jpg"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
