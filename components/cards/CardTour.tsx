import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./CardTour.css";

type CardProps = {
  tour: {
    name: string;
    shortDescription: string;
    slug: string;
    images: Array<string>;
    days:number;
  };
};

const CardTour = ({ tour }: CardProps) => {
  const t = useTranslations("tours");
  const locale = useLocale();

  const { name, shortDescription, images, slug, days } = tour;

  return (
    <Link href={`/${locale}/tour/${slug}`}>
      <div className="card-tour">
        <div className="absolute w-full h-full backdrop-brightness-[0.7] z-[-1]"></div>
        <Image
          src={images[0]}
          alt={`Photo of the Tour ${name}`}
          className="object-cover"
          width="800"
          height="800"
        />
        <div className="flex justify-between">
        <h3 className="text-gradient-white text-lg">{t(name)}</h3>
        <span className="bg-green-100 text-green-800 text-sm font-medium me-3 mt-3 px-2.5 py-0.5 rounded-full h-fit min-w-fit">
            {days}{t((days > 1 ? 'daysTrip':'dayTrip'))}
          </span>
        </div>
        <p>{t(shortDescription)}</p>
      </div>
    </Link>
  );
};

export default CardTour;
