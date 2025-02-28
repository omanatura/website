import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

const Logo = ({width = 125,link = true}:{width?:number,link?:boolean}) => {
  return (
    <Link href={link ? "./" : ""}><Image src={logo} alt="Logo" width={width}/></Link>
  )
}

export default Logo