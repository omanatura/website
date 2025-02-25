"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { paths } from "@/data/paths";
import { usePathname } from 'next/navigation'

const Nav = () => {
  //Get translations & currentLocale
  const t = useTranslations("nav");
  const currentLocale = useLocale();
  const currentPathname = usePathname();
  
  return (
    <nav className="hidden md:flex items-center gap-6 text-white font-bold text-lg">
        {paths.map((path) => {
            const pathname = path === "home" ? `/${currentLocale}` : `/${currentLocale}/${path}`;
          return (
            <div
              key={path}
              className="flex items-center justify-center mx-5 my-1"
            >
              <Link
                href={pathname}
                className={`relative  ${pathname === currentPathname ? 'text-secondary border-b-2':'btn-home'}`}
              >
                <span className="text-nowrap smallcaps">{t(path)}</span>
              </Link>
            </div>
          );
        })}
    </nav>
  );
};

export default Nav;
