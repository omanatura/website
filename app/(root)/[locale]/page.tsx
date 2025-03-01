import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import CarouselHome from "@/components/carousels/CarouselHome";
import { tours } from "@/data/tours";
import { MdLocationOn } from "react-icons/md";
import CardHome from "@/components/cards/CardHome";
import Testimonials from "@/components/carousels/CarouselTestimonials";

export default function Home() {
  //Get translations
  const homeT = useTranslations("home");
  const tourT = useTranslations("tours");
  const globalT = useTranslations("global");
  const locale = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-home bg-cover divider-chevron-down">
        <div className="backdrop-brightness-50 flex flex-col justify-center items-center min-h-[85vh] md:min-h-[110vh]">
          <h2 className="font-bold text-lg md:text-3xl text-white text-center uppercase">
            {homeT("cta1")}
          </h2>
          <h1 className="uppercase block font-extrabold text-5xl md:text-7xl text-center drop-shadow-lg text-gradient-2">
            {homeT("cta2")}
          </h1>

          <Link href={`/${locale}/tours`} className="mt-7 btn-1 text-2xl py-7">
            {homeT("ctaButton")}
          </Link>
        </div>
      </section>

      {/*  1-Week Rainforest Tour */}
      <section>
        <div className="mt-8 mb-3 md:mb-0 mx-3">
          <h3 className="text-center text-3xl smallcaps">
            {homeT("checkOutOur")}
          </h3>
          <h2 className="text-center font-extrabold drop-shadow-md text-4xl md:text-5xl text-gradient">
            {tourT("oneWeekName")}
          </h2>
          <div className="relative mt-5 mb-16 lg:mb-5">
            <div className="flex justify-center absolute w-full z-40">
              <Link href={`/${locale}/tour/one-week`} className="btn-1">
                {globalT("learnMore")}
              </Link>
            </div>
          </div>
        </div>
        <div className="divider-chevron-down-2">
          <CarouselHome />
        </div>
      </section>

      {/* <!-- Tours section  --> */}
      <section className="my-10">
        <div className="divider h-10 mb-10"></div>
        <div className="flex justify-center">
          <MdLocationOn size={37} className="text-[#dc0000]" />
          <h2 className="text-3xl text-center">{homeT("toursIn")}</h2>
        </div>
      </section>
      <section className="container mx-auto my-10 px-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0 mx-0 xl:mx-48">
          {(tours.slice(1)).map((tour) => (
            <CardHome key={tour.name} tour={tour} />
          ))}
        </div>
      </section>

      {/* <!-- Goal section  --> */}
      <section className="mt-5">
        <div className="divider h-10 mb-10 mt-14"></div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h3 className="text-center text-3xl font-extrabold md:w-[75%] lg:w-[50%]">
              {homeT("mission1")}
              <span className="text-gradient">{homeT("mission2")}</span>
              {homeT("mission3")}
              <span className="text-gradient">{homeT("mission4")} </span>
              {homeT("mission5")}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:mx-16 ">
            <div className="flex flex-col justify-center items-center mt-5">
              <Image
                alt="p"
                src="/images/lapa.jpg"
                width={200}
                height={200}
                style={{ clipPath: "url(#leafClipPath)" }}
              />
              <h1 className="text-center text-lg font-bold text-green-700">
                {homeT("missionitem1")}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center mt-5 sm:mt-24">
              <Image
                src="/images/by-miguel-bruna-unsplash.jpg"
                alt=""
                width={200}
                height={200}
                style={{ clipPath: "url(#leafClipPath)" }}
              />
              <h1 className="text-center text-lg font-bold text-green-700">
                {homeT("missionitem2")}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center col-span-2 sm:col-span-1">
              <Image
                src="/images/by-miguel-bruna-unsplash.jpg"
                alt=""
                width={200}
                height={200}
                style={{ clipPath: "url(#leafClipPath)" }}
              />
              <h1 className="text-center text-lg font-bold text-green-700">
                {homeT("missionitem3")}
              </h1>
            </div>
            {/* LEAF CLIP PATH */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath
                id="leafClipPath"
                transform="scale(1.7) translate(-33, -10)"
              >
                <path d="M100,10 C130,30 150,60 150,100 C150,140 130,170 100,190 C70,170 50,140 50,100 C50,60 70,30 100,10 Z"></path>
              </clipPath>
            </svg>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="flex justify-center mb-10">
        <div>
          <div className="divider h-10 mb-10"></div>
          <h3 className="text-center font-bold text-gradient text-3xl mb-10">
            {globalT("testimonials")}
          </h3>
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
