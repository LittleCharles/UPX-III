import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BannerHome() {
  return (
  
    <Carousel className="w-full mt-16">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="h-[500px]">
                <CardContent className="flex aspect-square items-center justify-center p-0 h-[500px] w-full">
                  <img className="rounded-lg" src="https://megasportonlineshop.com/image/cache/catalog/slider/new/adidasbaner-1400x500.jpg"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
