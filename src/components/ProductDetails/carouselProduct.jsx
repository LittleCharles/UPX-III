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
                  src="https://photos.enjoei.com.br/calca-jogger-sufgang-preta-34605050/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTE0MjM4Mi81ZTc1YmYwZmMxYzc0NmYyNmFkZjg0YjEyNjZiN2VhNS5qcGc"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <Card className="h-[650px]">
              <CardContent className="flex aspect-square items-center justify-center p-0 h-[650px] w-[650px]">
                <img
                  className="rounded-lg w-full h-full"
                  src="https://photos.enjoei.com.br/calca-jogger-sufgang-preta-34605050/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTE0MjM4Mi9jN2E5ZmUzMmZlMjVkYzU2YWRjMjRkZDc0NWYyNjFhNC5qcGc"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <Card className="h-[650px]">
              <CardContent className="flex aspect-square items-center justify-center p-0 h-[650px] w-[650px]">
                <img
                  className="rounded-lg w-full h-full"
                  src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/84096601_2912576102140093_8684159354066173952_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5C1qpb5QESQQ7kNvgH_krYw&_nc_ht=scontent-gru2-1.xx&oh=00_AYCVms13yd63l6lYktuUO-z2xeqmAyZWE4VLW9M9ngtbXw&oe=667D7A84"
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
