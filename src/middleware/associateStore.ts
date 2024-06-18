import { create } from "zustand";
import { AssociateDTO } from "../model/AssociateDTO";
interface AssociateStoreProps {
  associateDate: AssociateDTO | null;
  setAssociateData: (associateData: AssociateDTO | null) => void;
}
const associateStore = create<AssociateStoreProps>()((set) => ({
  associateDate: null,
  setAssociateData: (data) => {
    set({ associateDate: data });
  },
}));
export default associateStore;
