import { tours } from "@/data/tours";
import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import { notFound } from "next/navigation";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourPage({ params }: TourPageProps) {
  const slug = (await params).slug;
  const tour = tours.find((t) => t.slug === slug);
  const t = await getTranslations('tours');

  if (!tour) {
    return notFound();
  }

  return (
    <section className=" divider-chevron-down">
      <Image
        alt="Tour banner"
        src={tour.images[1]}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="backdrop-brightness-50 flex flex-col justify-center items-center min-h-[25vh] md:min-h-[50vh]">
      <h1 className="uppercase block font-extrabold text-3xl md:text-5xl text-center drop-shadow-lg text-gradient-white">
            {t(tour.name)}
          </h1>
          {/* <p>{tour.days > 1 ? `${tour.days}${t('daysTrip')}`:`${tour.days}${t('dayTrip')}`}</p> */}
      </div>
    </section>
  );
}
