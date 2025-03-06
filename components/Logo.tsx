import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"
import { getLocale } from "next-intl/server"

const Logo = async ({width = 125,link = true}:{width?:number,link?:boolean}) => {
    const locale = await getLocale();
  return (
    <Link href={link ? `/${locale}` : ""}><Image src={logo} alt="Logo" width={width}/></Link>
  )
}

export default Logo