import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <Link href="https://wa.me/50689593866" target="_blank">
      <div className="flex justify-center items-center w-20 h-20 rounded-full fixed bottom-0 right-0 z-50 m-3 md:m-5 cursor-pointer shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b82a] via-[#0a9605] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#04780e] hover:to-[#14b82f]">
        <FaWhatsapp size={50} color="white" />
      </div>
    </Link>
  );
};

export default FloatingButton;
