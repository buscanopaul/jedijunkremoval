import { create } from "zustand";

interface StoreState {
  isDisabledUpdate: boolean;
  setIsDisabledUpdate: (value: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  isDisabledUpdate: false,
  setIsDisabledUpdate: (value: boolean) =>
    set(() => ({ isDisabledUpdate: value })),
}));

export default useStore;
