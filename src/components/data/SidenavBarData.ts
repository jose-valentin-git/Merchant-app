import DashboardSideNavBarSVG from "../../assets/homePageIcons/DashboardSideNavBarSVG";
import HelpSideNavBarSVG from "../../assets/homePageIcons/HelpSideNavBarSVG";
import OrdersdSideNavBarSVG from "../../assets/homePageIcons/OrdersdSideNavBarSVG";
import PartnerSideNavBarSVG from "../../assets/homePageIcons/PartnerSideNavBarSVG";
import PatientSideNavBarSVG from "../../assets/homePageIcons/PatientSideNavBarSVG";
import ReferAFriendSideNavBarSVG from "../../assets/homePageIcons/ReferAFriendSideNavBarSVG";
import WhatsNewSideBarSVG from "../../assets/homePageIcons/WhatsNewSideBarSVG";

export interface SideNavBarType {
  id: number;
  label: string;
  icon: any;
  path: string;
  color: string;
}

const SideNavData = Object.freeze([
  {
    id: 1,
    label: "Dashboard",
    icon: DashboardSideNavBarSVG,
    path: "/dashboard",
    color: "purple",
  },
  {
    id: 2,
    label: "Patients",
    icon: PatientSideNavBarSVG,
    path: "/patients",
    color: "purple",
  },
  // {
  //   id: 3,
  //   label: "Orders",
  //   icon: OrdersdSideNavBarSVG,
  //   path: "/orders",
  //   color: "purple",
  // },
  {
    id: 4,
    label: "Partners",
    icon: PartnerSideNavBarSVG,
    path: "/partners",
    color: "purple",
  },
  {
    id: 5,
    label: "What's New",
    icon: WhatsNewSideBarSVG,
    path: "/whatsNew",
    color: "purple",
  },
  {
    id: 6,
    label: "Help",
    icon: HelpSideNavBarSVG,
    path: "/help",
    color: "purple",
  },
  // {
  //   id: 7,
  //   label: "Refer A Friend",
  //   icon: ReferAFriendSideNavBarSVG,
  //   path: "/referAFriend",
  //   color: "purple",
  // },
]);

export default SideNavData;
