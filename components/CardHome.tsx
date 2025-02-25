import { useTranslations, useLocale } from "next-intl";
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

const CardHome = ({tour}: CardProps) => {
  //Get translations & currentLocale
  const t = useTranslations("tour");
  const globalT = useTranslations("global");
  const locale = useLocale();

  return (
    <div key={`${tour.name} card`} className="card h-[80vh] lg:h-full">
      <div className="absolute top-0 left-0">
        <Image src={tour.images[0]} alt={`${tour.name} image`} width={500} height={500} className="w-full h-[80vh] object-cover"/>
      </div>
      <div className="content mx-5 backdrop-blur z-40 rounded-3xl">
        <h2 className="title drop-shadow-2xl">{t(tour.name)}</h2>
        <p className="text-sm">{t(tour.shortDescription)}</p>
        <Link className="btn-1 text-sm" href={`/${locale}/tour/${tour.slug}`}>
          {globalT("learnMore")}
        </Link>
      </div>
    </div>
  );
};

export default CardHome;
