import { create } from 'zustand';

interface drawerState {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const useDrawerStore = create<drawerState>((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (open) => set({ isDrawerOpen: open }),
}));

export default useDrawerStore;
