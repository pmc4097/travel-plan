import { FunctionComponent } from "react";
import { create } from "zustand";

interface State {
  startDate: Date | null;
  endDate: Date | null;
}
type Action = {
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
};

export const store = create<State & Action>()((set) => ({
  startDate: null,
  endDate: null,
  setStartDate: (startDate: Date) => set({ startDate }),
  setEndDate: (endDate: Date) => set({ endDate }),
}));

interface ModalState {
  modals: FunctionComponent<{ onClose: () => void }>[];
}

type ModalAction = {
  openModal: (modals: FunctionComponent<{ onClose: () => void }>) => void;
  closeModal: (index: number) => void;
  closeAll: () => void;
};

export const useModalStore = create<ModalState & ModalAction>()((set) => ({
  modals: [],
  openModal: (modal: FunctionComponent<{ onClose: () => void }>) =>
    set((state) => ({ modals: [...state.modals, modal] })),

  closeModal: (index: number) =>
    set((state) => ({ modals: state.modals.filter((_, i) => i !== index) })),

  closeAll: () => set({ modals: [] }),
}));
