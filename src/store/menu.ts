import { create } from "zustand";

type Store = {
  expand: boolean
  open: boolean
  setExpand: (action: boolean) => void
  setOpen: (action: boolean) => void
}

export const useMenu = create<Store>()((set) => ({
  expand: true,
  open: false,
  setExpand: (action) => set((state) => ({
    expand: action
  })),
  setOpen: (action) => set((state) => ({
    open: action
  }))
}))