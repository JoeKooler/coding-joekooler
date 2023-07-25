import { create } from 'zustand';

export type HeaderTabs = 'home' | 'devlogs' | 'projects' | 'about';

interface currentTabState {
  currentTab: HeaderTabs | null;
  setToHome: () => void;
  setToDevlogs: () => void;
  setToProjects: () => void;
  setToAbout: () => void;
}

const useCurrentTabStore = create<currentTabState>((set) => ({
  currentTab: null,
  setToHome: () => set({ currentTab: 'home' }),
  setToDevlogs: () => set({ currentTab: 'devlogs' }),
  setToProjects: () => set({ currentTab: 'projects' }),
  setToAbout: () => set({ currentTab: 'about' }),
}));

export default useCurrentTabStore;
