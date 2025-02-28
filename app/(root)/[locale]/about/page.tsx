import Testimonials from "@/components/carousels/CarouselTestimonials";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { main } from "@/data/main";

const About = () => {
    const t = useTranslations("about");
    const g = useTranslations("global");
  return (
    <section>
      {/* Header */}
      <section className="bg-rainforest1 bg-cover">
        <div className="backdrop-brightness-50 -full pt-24 pb-12 px-5 md:pt-32 text-white drop-shadow-2xl">
          <h1 className="text-center text-6xl mb-2 smallcaps font-extrabold">
            {t('weAre')} <span className="text-gradient-2">{main.companyName}</span>
          </h1>
          <p className="text-center text-2xl md:text-3xl mb-5 font-light">
            {t('header1')} 
            <span className="text-gradient-2 font-bold">
            {t('header2')} 
            </span>
          </p>
        </div>
      </section>
      <main className="container mx-auto px-5">
  <section className="mt-10">
    <p
      className="font-light text-center text-2xl md:text-3xl mb-5 text-darkColor lg:mx-52"
    >
      {t('content')}
    </p>
  </section>

  <div className="divider h-7 mt-10"></div>

  <section className="grid grid-cols-1 md:grid-cols-2 mt-10">
    <div className="flex items-center text-darkColor">
      <div className="md:text-center">
        <h3 className="text-gradient text-3xl">{t('ourMission')}</h3>
        <p className="text-2xl">
          {t('mission')}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center mt-10">
      <div className="rounded-bl-full rounded-tr-full">
        <Image
          src="/images/people/4.jpg"
          alt="photo"
          width={500}
          height={500}
          className="content-center rounded-bl-full rounded-tr-full"
        />
      </div>
    </div>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0">
    <div className="flex items-center justify-center mt-10 order-2 md:order-1">
      <div>
        <Image
          src="/images/people/4.jpg"
          alt="photo"
          width={500}
          height={500}
          className="content-center rounded-tl-full rounded-br-full"
        />
      </div>
    </div>
    <div className="flex items-center text-darkColor order-1 md:order-2">
      <div className="text-right md:text-center">
        <h3 className="text-gradient text-3xl">{t('ourVision')}</h3>
        <p className="text-2xl">
        {t('vision')}
        </p>
      </div>
    </div>
  </section>

  <div className="divider h-7 mt-10"></div>
  <h3 className="text-center text-gradient text-3xl mt-10">{t('ourStory')}</h3>

  <div className="mt-24 md:mx-[15vw] mb-10">
    <div
      className="mx-auto flex flex-col gap-2 px-4 border border-gray-300 rounded-lg"
    >
      <div className="w-full flex justify-center items-center">
        <Image
          className="w-[11rem] h-[11rem] rounded-full outline outline-offset-2 outline-1 outline-green-400 shadow-lg relative -top-[4rem]"
          src="https://lh3.googleusercontent.com/a/ACg8ocIexhm"
          alt="Profile Image"
          width={500}
          height={500}
        />
      </div>

      <div
        className="w-full h-full text-center flex flex-col gap-4 relative -top-10 px-5 md:px-10"
      >
        <p className="font-light text-lg">
        {t('story')}
        </p>
      </div>
    </div>
    <section className="flex justify-center mt-10 mb-10">
      <div>
          <div className="divider h-10 mb-10"></div>
          <h3 className="text-center font-bold text-gradient text-3xl mb-10">{g('testimonials')}</h3>
            <Testimonials/>
      </div>
  </section>
  </div>
</main>

    </section>
  );
};

export default About;
