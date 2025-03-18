import { getTranslations } from "next-intl/server";
import { credits } from "@/data/credits";
import Link from "next/link";

export async function generateMetadata(){
    const t = await getTranslations("footer");
    return {
        title: `${t('credits')} - OMA Natura Costa Rica`
    };
  }

const Credits = async () => {
  const t = await getTranslations("credits");
  return (
    <main className="container mx-auto mt-28 mb-10">
      <h3 className="text-4xl text-center text-primary font-extrabold mb-5">
        <span className="border-b-4 border-secondary w-fit">
          {t("credits")}
        </span>
      </h3>
      <p className="text-center text-2xl">{t("description")}</p>
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {credits.map((credit) => (
          <Link
            key={credit.author}
            href={credit.link}
            className="transition duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
              <div
                className="w-100 h-40 bg-sky-300 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${credit.thumbnail})`}}
              ></div>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 min-h-20">
                  {t("author")}: {credit.author}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Credits;
