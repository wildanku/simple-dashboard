import { CaretDown, CaretRight } from "@phosphor-icons/react"
import "./sidebar.css"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { parseUrl } from "../../helper/url-parser";
import { useMenu } from "../../store/menu";
import { Transition } from "@headlessui/react";

type showSubMenuType = {[name: string]: boolean}
type Props = {
  logo: string
  logosquare?: string
  menu: any[]
}

const Sidebar = ({logo, logosquare, menu}: Props) => {
  return (
    <>
      <div className="hidden md:block">
        <Desktop menu={menu} logo={logo} logosquare={logosquare}  />
      </div>
      <div className="block md:hidden">
        <Mobile menu={menu} logo={logo}  />
      </div>
    </>
  )
}

const Desktop = ({menu, logo, logosquare}: Props) => {
  const { expand } = useMenu()

  const navigate = useNavigate()
  const path = useLocation()

  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [showSubMenu, setShowSubMenu] = useState<showSubMenuType[]>([])

  const handleOpenSubMenu = (key: number) => {
    let getOpenMenu: any = [...showSubMenu]

    if (getOpenMenu[key]) {
      getOpenMenu[key] = false;
    } else {
      getOpenMenu[key] = true
    }

    setShowSubMenu(getOpenMenu)
  }

  const handleMouseEnter = () => {
    if (expand === true) return;

    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (expand === true) return;

    setIsHovered(false)
  }
  
  useEffect(() => {
    let parseMenus: any = [];
    menu.map(() => (
      parseMenus.push(false)
    ))
    
    setShowSubMenu(parseMenus)
  }, [])

  return (
    <div
      className={`
        ${expand || isHovered ? 'w-64' : 'w-20'} 
        h-screen fixed bg-dark text-light top-0 py-4
        transition-all duration-200 ease-in-out
        z-50
      `}
    >
      <ul className="pre-menu">
        <li className={`py-2 logo mb-2 px-2 flex justify-center`}>
          {
            expand || isHovered ? (
              <img src={logo} className="h-8" alt="" />
            ) : (
              <img src={logosquare ?? logo} className="h-8" alt="" />
            )
          }
        </li>
      </ul>
      <ul
        className="menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {
          menu.map((item, key) => (
            <>
              {
              item.children ? (
                <li
                  className={`
                    menu-item 
                    ${showSubMenu[key] ? ' open-submenu' : ' '}
                    ${parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? 'open-submenu active' : ' '}
                  `} 
                  onClick={() => handleOpenSubMenu(key)}
                >
                  <div className="flex justify-between items-center">
                    <div 
                      className="flex gap-3 items-center "
                    >
                      <div className="icon">
                        {item.icon}
                      </div>
                      {
                        expand || isHovered ? (
                          <div className="title">
                            {item.title}
                          </div>
                        ) : ('')
                      }
                    </div>
                    {
                      showSubMenu[key] || parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? (
                        <CaretDown weight="bold" />
                      ) : (
                        <CaretRight weight="bold" />
                      )
                    }
                  </div>
                  {
                    (showSubMenu[key] || parseUrl(path.pathname)[1] === parseUrl(item.link)[1]) 
                      && item.children?.map((subitem: any, key:number) => (
                      <div 
                        className={`
                          flex gap-3 items-center submenu
                          ${parseUrl(path.pathname)[1]+parseUrl(path.pathname)[2] === parseUrl(subitem.link)[1]+parseUrl(subitem.link)[2] ? 'active' : ''}
                        `} 
                        key={key}
                        onClick={() => navigate(subitem.link ?? '#')}
                      >
                        {
                          expand || isHovered ? (
                            <>
                              <div className="icon"></div>
                              <div className="title">
                                {subitem.title}
                              </div>
                            </>
                          ) : (
                            <div className="">
                              {subitem.title.split('')[0]}..
                            </div>
                          )
                        }
                      </div>
                    ))
                  }
                </li>
              ) : (
                <li
                  className={`
                    menu-item
                    ${parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? 'active' : ''}
                  `} 
                  onClick={() => navigate(item.link ?? '#')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className="icon">
                        {item.icon}
                      </div>
                      {
                        expand || isHovered ? (
                          <div className="title">
                            {item.title}
                          </div>
                        ) : ('')
                      }
                    </div>
                  </div>
                </li>
              )
            }
            </>
          ))
        }
      </ul>
      
    </div>
  )
}

const Mobile = ({menu, logo}: Props) => {
  const { open, setOpen } = useMenu()

  const navigate = useNavigate()
  const path = useLocation()

  const [showSubMenu, setShowSubMenu] = useState<showSubMenuType[]>([])

  const handleOpenSubMenu = (key: number) => {
    let getOpenMenu: any = [...showSubMenu]

    if (getOpenMenu[key]) {
      getOpenMenu[key] = false;
    } else {
      getOpenMenu[key] = true
    }

    setShowSubMenu(getOpenMenu)
  }
  
  useEffect(() => {
    let parseMenus: any = [];
    menu.map(() => (
      parseMenus.push(false)
    ))
    
    setShowSubMenu(parseMenus)
  }, [])

  return (
    <Transition show={open}>
      <div className={`
        h-screen absolute z-10 w-full
      `}>
        <div 
          className="h-screen w-full bg-opacity-50 bg-gray-900" 
          onClick={() => setOpen(false)} 
        />
        <div
          className={`
            absolute top-0
          `}
        >
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <ul
              className="menu menu-responsive w-64 bg-dark h-screen text-light z-50"
            >
              {
                menu.map((item, key) => (
                  <>
                    {
                    item.children ? (
                      <li
                        className={`
                          menu-item 
                          ${showSubMenu[key] ? ' open-submenu' : ' '}
                          ${parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? 'open-submenu active' : ' '}
                        `} 
                        onClick={() => handleOpenSubMenu(key)}
                      >
                        <div className="flex justify-between items-center">
                          <div 
                            className="flex gap-3 items-center "
                          >
                            <div className="icon">
                              {item.icon}
                            </div>
                            <div className="title">
                              {item.title}
                            </div>
                          </div>
                          {
                            showSubMenu[key] || parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? (
                              <CaretDown weight="bold" />
                            ) : (
                              <CaretRight weight="bold" />
                            )
                          }
                        </div>
                        {
                          (showSubMenu[key] || parseUrl(path.pathname)[1] === parseUrl(item.link)[1]) 
                            && item.children?.map((subitem: any, key:number) => (
                            <div 
                              className={`
                                flex gap-3 items-center submenu
                                ${parseUrl(path.pathname)[1]+parseUrl(path.pathname)[2] === parseUrl(subitem.link)[1]+parseUrl(subitem.link)[2] ? 'active' : ''}
                              `} 
                              key={key}
                              onClick={() => {
                                navigate(subitem.link ?? '#')
                                setOpen(false)
                              }}
                            >
                              <div className="icon"></div>
                              <div className="title">
                                {subitem.title}
                              </div>
                            </div>
                          ))
                        }
                      </li>
                    ) : (
                      <li
                        className={`
                          menu-item
                          ${parseUrl(path.pathname)[1] === parseUrl(item.link)[1] ? 'active' : ''}
                        `} 
                        onClick={() => {
                          navigate(item.link ?? '#')
                          setOpen(false)
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <div className="icon">
                              {item.icon}
                            </div>
                            <div className="title">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  }
                  </>
                ))
              }
            </ul>
          </Transition.Child>
          
        </div>
      </div>
    </Transition>
  )
}

export default Sidebar