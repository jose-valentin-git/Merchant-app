import { create } from "zustand";
import { DropDownSelectedDTO } from "../model/dashboard/DropDownSelectedDTO";

interface DashboardStoreProps {
  startDate: string | null;
  endDate: string | null;
  duration: DropDownSelectedDTO;
  setDuration: (value: DropDownSelectedDTO) => void;
  setDate: (startDate: string | null, endDate: string | null) => void;
}

const dashboardStore = create<DashboardStoreProps>()((set) => ({
  startDate: null,
  endDate: null,
  duration: "MONTH",
  setDuration: (value) => set({ duration: value }),
  setDate: (startDate, endDate) =>
    set({ startDate: startDate, endDate: endDate }),
}));

export default dashboardStore;
