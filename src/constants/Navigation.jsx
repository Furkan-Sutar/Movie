import { PiTelevisionBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const navigation = [
  {
    label: "Tv Show",
    href: "/tv",
  },
  {
    label: "Movies",
    href: "/movie",
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoMdHome />,
  },
  {
    label: "Tv Show",
    href: "/tv",
    icon: <PiTelevisionBold />,
  },
  {
    label: "Movies",
    href: "/movie",
    icon: <BiMovie />,
  },
  {
    label: "Search",
    href: "/search?q=",
    icon: <CiSearch />,
  },
];
