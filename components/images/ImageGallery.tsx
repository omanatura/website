"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import ImageZoom from "./ImageZoom";

export default function ImageGallery({
  images,
  tourName,
}: {
  images: string[];
  tourName: string;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const isFullScreenOpen = selectedImageIndex !== null;
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const fullScreenCarouselRef = useRef<HTMLDivElement>(null);

  const openFullScreen = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeFullScreen = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = ""; // Restore scrolling
  };

  useEffect(() => {
    if (isFullScreenOpen && carouselApi) {
      carouselApi.scrollTo(selectedImageIndex || 0);
    }
  }, [isFullScreenOpen, selectedImageIndex, carouselApi]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery display carousel */}
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={`${tourName}${index}`}
              className="pl-2 md:pl-4 basis-1/3 lg:basis-1/5"
            >
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer group aspect-[4/3]"
                onClick={() => openFullScreen(index)}
              >
                <Image
                  src={image}
                  alt={`Photo ${index} of ${tourName}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 25vw, 30vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 transform scale-110 bg-white hover:bg-primary text-black hover:text-secondary border-none" />
        <CarouselNext className="right-2 transform scale-110 bg-white hover:bg-primary text-black hover:text-secondary border-none" />
      </Carousel>

      {/* Full Screen Carousel */}
      {isFullScreenOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeFullScreen}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute right-6 top-6 z-50  bg-white hover:bg-primary text-black hover:text-secondary border-none"
              onClick={closeFullScreen}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <Carousel
              className="w-full max-w-5xl px-5"
              ref={fullScreenCarouselRef}
              setApi={setCarouselApi}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={`fullscreen${tourName}${index}`}
                    className="flex items-center justify-center"
                  >
                    <div className="relative h-[90vh] flex items-center w-full">
                      <ImageZoom
                        src={image}
                        alt={`Photo ${index} of ${tourName}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 transform scale-150 bg-white hover:bg-primary text-black hover:text-secondary border-none" />
              <CarouselNext className="right-4 transform scale-150 bg-white hover:bg-primary text-black hover:text-secondary border-none" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
