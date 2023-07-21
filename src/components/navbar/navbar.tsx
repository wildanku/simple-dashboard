import { Bell, SignOut, User } from "@phosphor-icons/react"
import { useMenu } from "../../store/menu"
import BurgerMenu from "../svg/burger-menu"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, Transition } from "@headlessui/react"
import Breadcrumb from "./breadcrumb"

type Props = {
  logo: string
}

const Navbar = ({logo}: Props) => {
  const { expand, open, setExpand, setOpen } = useMenu()

  const navigate = useNavigate()

  const handleExpand = () => {
    if(expand === true) setExpand(false)
    else setExpand(true)
  }

  const handleOpen = () => {
    if(!open) setOpen(true)
    else setOpen(false)
  }

  return (
    <div className="py-3 md:py-2 pl-6 pr-4 w-full z-50 bg-white fixed left-0">
      <div className="flex justify-between items-center">
        <div>
          <div className="hidden md:flex items-center gap-3" >
            <div onClick={handleExpand}>
              <BurgerMenu
                rect1w={expand ? 80 : 60}
                rect3w={expand ? 80 : 60}
                className="cursor-pointer fill-gray-700 hover:fill-gray-600"
              />
            </div>
            <img src={logo} className="h-8 flex" alt="" />
            {/* <Breadcrumb /> */}
          </div>
          <div className="py-1 flex md:hidden items-center gap-2">
            <div onClick={handleOpen}>
              <BurgerMenu
                rect1w={!open ? 80 : 80}
                rect2w={!open ? 80 : 80}
                rect3w={!open ? 60 : 80}
                className="cursor-pointer "
              />
            </div>
            <img src={logo} className="h-8 flex" alt="" />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="notification text-2xl p-3 rounded-full hover:bg-gray-200 bg-gray-50 cursor-pointer relative">
            <Bell />
            <span className="text-xs absolute top-0 py-1 px-2 font-semibold right-0 rounded-full bg-red-600 text-white">12</span>
          </div>
          <div className="profile relative">
            <Menu as="div">
              <Menu.Button>
                <div 
                  className={`
                    profile cursor-pointer flex items-center gap-2 md:pl-2 md:pr-4 md:py-1 bg-gray-100 hover:bg-gray-200 rounded-full md:rounded-lg 
                  `}
                >
                  <img 
                    src="https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png" 
                    alt="" 
                    className="h-8 w-8 object-cover rounded-full"
                  />
                  <div className="leading-none hidden md:block">
                    <span>Hi, John Doe</span> <br />
                    <small className="text-xs">Super Admin</small>
                  </div>
                </div>
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-52 mt-1 rounded-lg text-sm bg-white shadow py-2 px-4 text-left">
                  <ul>
                    <li
                      className="py-2 flex items-center gap-3 hover:text-primary cursor-pointer"
                      onClick={() => navigate('#')}
                    >
                      <User weight="duotone" className="text-purple-700" /> <span>My Profile</span>
                    </li>
                    <li
                      className="py-2 flex items-center gap-3 hover:text-primary cursor-pointer"
                      onClick={() => navigate('#')}
                    >
                      <SignOut weight="duotone" className="text-red-700" /> <span>Sign Out</span>
                    </li>
                  </ul>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="block md:hidden" onClick={handleOpen}>
            
          </div>
        </div>
      </div>

      
    </div>

  )
}

export default Navbar