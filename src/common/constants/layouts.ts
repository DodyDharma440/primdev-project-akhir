import { HiOutlineChartSquareBar, HiSearch, HiUsers } from "react-icons/hi";
import { IoMdHeadset } from "react-icons/io";
import { ISidebarMenu } from "../interfaces/layouts";

export const sidebarMenus: ISidebarMenu[] = [
  { label: "Discover", path: "/", icon: HiSearch },
  { label: "Around You", path: "/around-you", icon: IoMdHeadset },
  { label: "Top Artists", path: "/top-artists", icon: HiUsers },
  { label: "Top Charts", path: "/top-charts", icon: HiOutlineChartSquareBar },
];
