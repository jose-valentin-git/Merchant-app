import { SideNavBarType } from "../../components/data/SidenavBarData";

export interface SideNavBarSVGProps {
  color: string | "white";
  hover: boolean;
  setHover: (param: boolean) => void;
}

export interface SideBarElementsProps {
  item: SideNavBarType;
  // isOpen: boolean;
  clickedLink: number;
  setClickedLink: (param: number) => void;
}
