import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import './CardHome.css'

type CardProps = {
    tour:{
        name: string;
        shortDescription: string;
        slug: string;
        images: Array<string>;
    }
}

const CardHome = async ({tour}: CardProps) => {
  //Get translations & currentLocale
  const t = await getTranslations("tours");
  const globalT = await getTranslations("global");
  const locale = await getLocale();

  return (
    <Link className="card-home h-[80vh] lg:h-full" href={`/${locale}/tour/${tour.slug}`}>
      <div className="absolute top-0 left-0">
        <Image src={tour.images[0]} alt={`${tour.name} image`} width={500} height={500} className="w-full h-[80vh] object-cover"/>
      </div>
      <div className="content-card-home mx-5 backdrop-blur z-40 rounded-3xl">
        <h2 className="title-card-home drop-shadow-2xl">{t(tour.name)}</h2>
        <p className="text-sm">{t(tour.shortDescription)}</p>
        <div className="btn-1 text-sm">
          {globalT("learnMore")}
        </div>
      </div>
    </Link>
  );
};

export default CardHome;
