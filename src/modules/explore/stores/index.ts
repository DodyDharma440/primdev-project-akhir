import { create } from "zustand";

type CategoryStore = {
  activeCategory: string;
  onChangeCategory: (name: string) => void;
};

export const useCategory = create<CategoryStore>((set) => ({
  activeCategory: "",
  onChangeCategory: (name) =>
    set((state) => ({ ...state, activeCategory: name })),
}));
