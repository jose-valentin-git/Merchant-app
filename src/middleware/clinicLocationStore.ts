import { create } from "zustand";
import { ClinicDTO } from "../model/ClinicDTO";

interface ClinicLocationStoreProps {
  markedClinic: ClinicDTO | null;
  setMarkedClinic: (clinicData: ClinicDTO | null) => void;
}
const clinicLocationStore = create<ClinicLocationStoreProps>()((set) => ({
  markedClinic: null,
  setMarkedClinic: (data) => {
    set({ markedClinic: data });
  },
}));

export default clinicLocationStore;
