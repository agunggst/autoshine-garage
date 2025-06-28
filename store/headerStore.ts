import { create } from "zustand";

interface HeaderState {
  title: string
  subTitle: string
  updateTitle: (newTitle: string) => void
  updateSubTitle: (newSubTitle: string) => void
}

export const useHeaderStore = create<HeaderState>((set, get) => ({
  title: '',
  subTitle: '',

  updateTitle: (newTitle) => set({ title: newTitle }),
  updateSubTitle: (newSubTitle) => set({ subTitle: newSubTitle })
}))