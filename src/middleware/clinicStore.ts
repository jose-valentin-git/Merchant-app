import { create } from "zustand";
import { ClinicDTO } from "../model/ClinicDTO";

interface clinicStoreProps {
  clinicData: ClinicDTO | null;
  setClinicData: (clinicData: ClinicDTO | null) => void;
}

const clinicStore = create<clinicStoreProps>()((set) => ({
  clinicData: null,
  setClinicData: (data) => {
    set({ clinicData: data });
  },
}));
export default clinicStore;
