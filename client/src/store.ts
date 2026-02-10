import { FunctionComponent, ReactNode } from "react";
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

interface ModalItem {
  id: string;
  content: (id: string) => ReactNode;
}

interface CustomModalState {
  modals: ModalItem[];
}

interface CustomModalAction {
  createModal: (content: (id: string) => ReactNode) => string;
  removeModal: (id: string) => void;
}
export const useCustomModalStore = create<
  CustomModalState & CustomModalAction
>()((set) => ({
  modals: [],
  createModal: (content: (id: string) => ReactNode) => {
    const id = crypto.randomUUID();
    set((state) => ({
      modals: [...state.modals, { id, content }],
    }));
    return id;
  },
  removeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    }));
  },
}));
