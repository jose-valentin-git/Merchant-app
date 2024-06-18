import { create } from "zustand";
import { PatientDataParams } from "../../model/PatientDataParams";

interface DateSelectedStoreProps {
  params: PatientDataParams;
  resetDate: () => void;
  setProccessed: (value: boolean) => void;
  setStartAndEndDate: (
    startingDate: string | null | undefined,
    endinDate: string | null | undefined
  ) => void;
  setSearchParams: (value?: string | null) => void;
}

const usePatientDataParamStore = create<DateSelectedStoreProps>((set) => ({
  params: {},
  setStartAndEndDate: (
    startingDate: string | null | undefined,
    endingDate: string | null | undefined
  ) =>
    set((state) => ({
      params: { ...state.params, startDate: startingDate, endDate: endingDate },
    })),
  resetDate: () =>
    set((state) => ({
      params: { ...state.params, startDate: null, endDate: null },
    })),
  setProccessed: (value) =>
    set((state) => ({ params: { ...state.params, proccessed: value } })),
  setSearchParams: (value) =>
    set((state) => ({ params: { ...state.params, searchParam: value } })),
}));
export default usePatientDataParamStore;
