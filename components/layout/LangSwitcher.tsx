import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { languages } from "@/i18n/routing";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";

const LangSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center gap-2 bg-teal-200 hover:bg-secondary h-10 w-10 rounded-full">
            <MdLanguage size={30}/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-teal-100">
      {languages.map((lang) => (
            <DropdownMenuItem key={lang.name} className="hover:!bg-teal-700 hover:!text-white">
                <Link href={`/${lang.locale}`} className="font-medium w-full h-full">{lang.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LangSwitcher