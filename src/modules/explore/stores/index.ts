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

type SearchStore = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  freezedValue: string;
  setFreezedValue: (value: string) => void;
};

export const useSearch = create<SearchStore>((set) => ({
  searchValue: "",
  setSearchValue: (value: string) =>
    set((state) => ({ ...state, searchValue: value })),
  freezedValue: "",
  setFreezedValue: (value: string) =>
    set((state) => ({ ...state, freezedValue: value })),
}));
