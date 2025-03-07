"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Carousel
      className="w-[74vw] md:w-[60vw]"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => {
          return (
            <CarouselItem key={testimonial.name}>
              <section className="border-2 rounded-3xl bg-secondary">
                <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-teal-800"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="text-lg text-gray-900">
                        {testimonial.testimony}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-900 dark:text-gray-400">
                          {testimonial.country}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
