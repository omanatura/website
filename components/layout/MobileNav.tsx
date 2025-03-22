import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";
import { paths } from "@/data/paths";

const MobileNav = async () => {
  //Get translations & currentLocale
  const t = await getTranslations("nav");
  const currentLocale = await getLocale();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full md:hidden bg-white p-[1.19rem]"
        >
          <GiHamburgerMenu size={30} />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-secondary p-6">
        <SheetHeader>
          <SheetTitle className="sr-only">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="grid gap-6">
          {paths &&
            paths.map((path) => (
              <Link
                key={path}
                href={path === 'home' ? `/${currentLocale}`:`/${currentLocale}/${path}`}
                className="text-2xl text-primary font-medium hover:underline hover:underline-offset-4"
              >
                {t(path)}
              </Link>
            ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
