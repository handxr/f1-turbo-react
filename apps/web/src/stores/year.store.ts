import { create } from "zustand";

type YearStoreProps = {
  year: number;
  setYear: (year: number) => void;
};

export const useYearStore = create<YearStoreProps>((set) => ({
  year: new Date().getFullYear(),
  setYear: (year) => set({ year }),
}));
