export interface SideNavBarSVGProps {
  color: string | "white";
  hover: boolean;
  setHover: (param: boolean) => void;
}

export interface SideBarElementsProps {
  item?: any;
  isOpen: boolean;
  clickedLink: number;
  setClickedLink: (param: number) => void;
}
export interface DoctorProfileProps {
  isOpen: boolean;
}

export interface ClinicCardProps {
  clinicName: string;
  location: string;
  locationPinnedStatus: string;
}
export interface AssociateCardProps {
  name: string;
  phoneNumber: string;
  status: string;
}

export interface PatientInterface {
  id: string;
  name: string;
  phoneNumber: string;
  upcomingVisits: string;
  lastRxVisit: string;
  src: string;
}

export interface InviteFormData {
  partnerTypeId: number | null;
  name: string;
  mobileNumber: string;
  email?: string;
  userId?: string | number;
}

export interface InviteFormErrors {
  dropDownValue: string;
  name: string;
  mobileNo: string;
  email: string;
}
export interface DashboardCustomDateFilter {
  startDate: null | string;
  endDate: null | string;
}

export interface FromDateToTillDate {
  startDate: null | string;
  endDate: null | string;
}

// prescription logos size interface
export interface LogoSVGProps {
  width?: number | 30;
  height?: number | 30;
  fillColor?: string | "#6C5DD3";
}
