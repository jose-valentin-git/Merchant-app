import { create } from "zustand";
import DoctorDTO from "../model/DoctorDTO";
interface DoctorProfileStoreProps {
  doctorData?: DoctorDTO | null;
  setDoctorProfileData: (doctorData?: DoctorDTO | null) => void;
}
const doctorProfileStore = create<DoctorProfileStoreProps>()((set) => ({
  doctorData: null,
  setDoctorProfileData: (doctorData) => {
    if (doctorData) {
      set({ doctorData: doctorData });
    }
  },
}));
export default doctorProfileStore;
