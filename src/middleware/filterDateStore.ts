import { create } from "zustand";
import DateUtils from "../utils/formatDate";
export interface DateStore {
  isDateFilter: boolean | false;
  fromDate: string | null;
  tillDate: string | null;
  setDates: (
    fromDate: string | null,
    tillDate: string | null,
    isDateFilter: boolean | false
  ) => void;
  clearDates: () => void;
}
/* 
At the very first when application loads this method will set the values of
fromDate and tillDate in such a way that there will be difference of one month
between fromDate and tillDate values
*/
const useSubmittedRxDateFilterStore = create<DateStore>((set) => {
  const currentDate = new Date();
  const previousMonthDate = new Date(currentDate);
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
  return {
    isDateFilter: false,
    fromDate: DateUtils.formatDate(previousMonthDate),
    tillDate: DateUtils.formatDate(currentDate),
    setDates: (fromDate, tillDate, isDateFilter) =>
      set({ fromDate, tillDate, isDateFilter }),
    clearDates: () =>
      set({ fromDate: null, tillDate: null, isDateFilter: false }),
  };
});

const usePatientsDateFilterStore = create<DateStore>((set) => {
  const currentDate = new Date();
  const previousMonthDate = new Date(currentDate);
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
  return {
    isDateFilter: false,
    fromDate: DateUtils.formatDate(previousMonthDate),
    tillDate: DateUtils.formatDate(currentDate),
    setDates: (fromDate, tillDate, isDateFilter) =>
      set({ fromDate, tillDate, isDateFilter }),
    clearDates: () =>
      set({ fromDate: null, tillDate: null, isDateFilter: false }),
  };
});

const useFamilyPrescriptionDateFilterStore = create<DateStore>((set) => {
  const currentDate = new Date();
  const previousMonthDate = new Date(currentDate);
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
  return {
    isDateFilter: false,
    fromDate: DateUtils.formatDate(previousMonthDate),
    tillDate: DateUtils.formatDate(currentDate),
    setDates: (fromDate, tillDate, isDateFilter) =>
      set({ fromDate, tillDate, isDateFilter }),
    clearDates: () =>
      set({ fromDate: null, tillDate: null, isDateFilter: false }),
  };
});

export {
  useSubmittedRxDateFilterStore,
  usePatientsDateFilterStore,
  useFamilyPrescriptionDateFilterStore,
};
