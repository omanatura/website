"use client";

import { Tour } from "@/types/tour";
import { IoMdPeople } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

const TourReservation = ({ tour }: { tour: Tour }) => {
  //Destructure values needed
  const { price, priceOne } = tour;
  //State to manage number of attendants selected
  const [attendants, setAttendants] = useState(2);
  //State to manage total cost of the tour
  const [total, setTotal] = useState(price * attendants);
  //Tranlastions variable to get i18n
  const gt = useTranslations("global");
  //
  const { scrollY } = useScrollPosition();
  const userScrolled = scrollY > 600;

  //Effect to update the total price based on the attentands
  //Price for one person will be different
  useEffect(() => {
    setTotal(attendants > 1 ? price * attendants : priceOne);
  }, [attendants]);

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden p-5 lg:block w-full border border-slate-400 rounded-3xl shadow-lg shadow-slate-400 bg-slate-100">
        <div>
          <div className="flex gap-2 mb-5">
            <div>
              <h4 className="font-bold text-xl">{gt("from")}:</h4>
              <div className="flex gap-2">
                <h4 className="text-primary text-5xl font-extrabold">
                  ${total}
                </h4>
                <div className="flex items-end">
                  <p className="font-bold">X</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IoMdPeople size={30} className="my-1" />
              <Input
                type="number"
                className="border-primary w-14 text-center font-bold text-md"
                value={attendants}
                onChange={(e) => setAttendants(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="mb-5">
            <ul className="max-w-md space-y-1 text-gray-700 list-inside">
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {gt("noUpfront")}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500  shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {gt("taxIncluded")}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {gt("freeCancel")}
              </li>
            </ul>
          </div>
          <Link href="https://wa.me/50689593866" target="_blank">
            <button className="btn-2 py-8 w-full">
              <FaWhatsapp size={30} color="white" /> {gt("reserveNow")}
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`${
          userScrolled ? "block" : "lg:hidden"
        } animate-fadeIn flex justify-between fixed bottom-0 z-[60] left-0 w-screen h-[104px] p-3 bg-slate-100 shadow-[0px_-3px_6px_0px_rgba(0,_0,_0,_0.1)]`}
      >
        <div className="flex gap-1 sm:gap-2">
          <div className="flex flex-col justify-end">
            <h4 className="font-bold text-lg lg:text-xl">{gt("from")}:</h4>
            <div className="flex justify-end gap-1 sm:gap-2">
              <h4 className="text-primary text-3xl sm:text-5xl font-extrabold">
                ${total}
              </h4>
              <div className="flex items-end">
                <p className="font-bold">X</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoMdPeople size={25} className="my-1" />
            <Input
              type="number"
              className="border-primary w-12 text-center font-bold text-lg"
              value={attendants}
              onChange={(e) => setAttendants(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="mx-5 flex items-center">
          <Link href="https://wa.me/50689593866" target="_blank">
            <button className="btn-2 py-8 w-full">
              <FaWhatsapp size={35} color="white" /> {gt("reserveNow")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourReservation;
