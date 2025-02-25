import { useTranslations } from "next-intl";
import Logo from "../Logo";
import Nav from "./Nav";
import LangSwitcher from "./LangSwitcher";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-primary shadow-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 my-2 md:my-3">
        <Logo />
        <Nav />
        <div className="flex gap-3">
            <LangSwitcher />
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
