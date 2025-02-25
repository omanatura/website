import Image from "next/image"
import logo from "@/public/logo.png"

const Logo = ({width = 125}:{width?:number}) => {
  return (
    <Image src={logo} alt="Logo" width={width}/>
  )
}

export default Logo