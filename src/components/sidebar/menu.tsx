import { Browsers, Gear, House, UserSwitch } from "@phosphor-icons/react";
import { Menu } from "../../types/menu";

export const menu: Menu[] = [
  {
    name: "dashboard",
    title: "Dashboard",
    link: "/",
    icon: <House />,
    children: null
  },
  {
    name: "pages",
    title: "Pages",
    link: "/pages",
    icon: <Browsers />,
    children: [
      {
        name: "submenu1",
        title: "Sub Menu 1",
        link: "/pages/sub-1"
      },
      {
        name: "submenu2",
        title: "Sub Menu 2",
        link: "/pages/sub-2"
      },
    ]
  },
  {
    name: "setting",
    title: "Setting",
    link: "/setting",
    icon: <Gear />,
    children: [
      {
        name: "submenu1",
        title: "Sub Menu 1",
        link: "/setting/sub-1"
      },
      {
        name: "submenu2",
        title: "Sub Menu 2",
        link: "/setting/sub-2"
      },
    ]
  },
  {
    name: "profile",
    title: "Profile",
    link: "/profile",
    icon: <UserSwitch />,
    children: null
  },
]