import { create } from "zustand";

interface SideNavBarOpenStoreProps {
  isOpen: boolean;
  toggle: () => void;
  setOpenState: (isOpen: boolean) => void;
}

const useSideNavBarOpenStore = create<SideNavBarOpenStoreProps>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpenState: (isOpen) => set({ isOpen }),
}));

export default useSideNavBarOpenStore;
