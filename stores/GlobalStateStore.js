import { create } from "zustand";

const useStore = create((set) => ({
  toolsActive: false,
  backgroundActive: true,
  toggleBackground: () =>
    set((state) => ({ backgroundActive: !state.backgroundActive })),
  toggleTools: () => set((state) => ({ toolsActive: !state.toolsActive })),
}));

export default useStore;
