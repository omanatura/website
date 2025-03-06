"use client";

import { Tour } from "@/types/tour";
import { IoMdPeople } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const TourReservation = ({ tour }: { tour: Tour }) => {
  const { price,maxPerGroup,priceOne } = tour;
  const [attendants, setAttendants] = useState(2);
  const [total, setTotal] = useState(price * attendants);
  const gt = useTranslations("global");

  useEffect(() => {
    setTotal(attendants > 1 ? price * attendants : priceOne);
  }, [attendants]);

  return (
    <div className="relative">
      <div className="hidden xl:block w-full h-[50vh] border border-slate-400 rounded-3xl shadow-lg shadow-slate-400 bg-slate-100">
        TourReservation
      </div>

      <div className="xl:hidden fixed bottom-0 z-50 left-0 w-screen h-[104px] p-3 bg-slate-100 shadow-[0px_-3px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="flex gap-3">
          <div>
            <h4 className="font-bold text-xl">{gt("price")}:</h4>
            <div className="flex gap-2">
              <h4 className="text-primary text-5xl font-extrabold">${total}</h4>
              <div className="flex items-end">
                <p className="font-bold">X</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoMdPeople size={30} />
            <Input
              type="number"
              className="border-primary w-16 text-center font-bold"
              value={attendants}
              onChange={(e) => setAttendants(Number(e.target.value))}
              max={maxPerGroup}
            />
            <p className="font-light text-xs">{gt("upTo")} {maxPerGroup}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourReservation;
