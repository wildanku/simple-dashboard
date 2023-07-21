import { menu } from "../sidebar/menu"
import Sidebar from "../sidebar/sidebar"
import "./base.css"
import Logo from "../../assets/img/samplelogo.png"
import LogoSquare from "../../assets/img/yourlogosquare.png"
import Navbar from "../navbar/navbar"
import { useMenu } from "../../store/menu"

type Props = {
  children: JSX.Element | JSX.Element[] | null
}

const BaseLayout = ({children}: Props) => {
  
  const { expand } = useMenu()

  return (
    <div className="relative">
      <Sidebar
        logo={Logo}
        logosquare={LogoSquare}
        menu={menu}
      />
      
      <div className={` 
        min-h-screen w-full
        transition-all duration-400 ease-in-out
        ${expand ? 'md:pl-64' : 'md:pl-20'}
      `}>
        <Navbar logo={Logo} />
        <div className="px-4 pt-24 pb-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout