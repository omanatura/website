import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <section className="bg-rainforest1 bg-cover">
        <div className="backdrop-brightness-50 -full pt-24 pb-12 px-5 md:pt-32 text-white drop-shadow-2xl">
          <h1 className="text-center text-6xl mb-2 smallcaps font-extrabold">
            <span className="text-gradient-white">Contact Us</span>
          </h1>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center my-10">
          <Link href="https://wa.me/50689593866" target="_blank">
            <button className="btn-2 py-10">
              <FaWhatsapp size={30} color="white" /> Contact us now in Whatsapp!
            </button>
          </Link>
        </div>

        {/* <div className="flex flex-col items-center justify-center my-10">
          <h3 className="text-center text-xl mb-10">...or send us an email!</h3>
          <ContactForm />
        </div> */}
      </section>
    </main>
  );
}

export default Contact