import TourReservation from "@/components/TourReservation";
import ImageGallery from "@/components/images/ImageGallery";
import { tours } from "@/data/tours";
import { getTranslations, getLocale } from "next-intl/server";
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
  const t = await getTranslations("tours");
  const locale = await getLocale();

  const { default: Post } = await import(`@/content/${locale}/${slug}.mdx`)

  if (!tour) {
    return notFound();
  }

  return (
    <main className="mb-10">
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
        <div className="backdrop-brightness-50 flex flex-col justify-center items-center min-h-[40vh] md:min-h-[50vh] 2xl:min-h-[40vh]">
          <h1 className="uppercase block font-extrabold text-3xl md:text-5xl text-center drop-shadow-lg text-gradient-white mt-10">
            {t(tour.name)}
          </h1>
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <ImageGallery images={tour.images} tourName={t(tour.name)} />
      </section>

      <section className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-2"><Post /></div>
        <div><TourReservation tour={tour}/></div>
      </section>
    </main>
  );
}
