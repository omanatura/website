
"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function CarouselHome() {
  const t = useTranslations("homeBanner");

  return (
    <div className="w-full mx-auto">
      <Carousel className="w-full" opts={{ loop:true}} plugins={[Autoplay({delay:10000})]}>
        <CarouselContent>
          {[1,2,3].map((number)=>(
            <CarouselItem key={`${number}carousel`}>
            <div className="relative">
              <Image
                src={`/images/one-week/banner${number}.jpg`}
                alt={`Carousel Image ${number}`}
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] lg:h-[75vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 md:p-8 lg:p-10">
                <div className="text-white space-y-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{t(`title${number}`)}</h3>
                  <p className="text-base md:text-md lg:text-lg">
                  {t(`description${number}`)}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 lg:left-8">
          <Button variant="outline" size="icon">
            <ChevronLeftIcon />
            <span className="sr-only">Previous</span>
          </Button>
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 lg:right-8">
          <Button variant="outline" size="icon">
            <ChevronRightIcon  />
            <span className="sr-only">Next</span>
          </Button>
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
