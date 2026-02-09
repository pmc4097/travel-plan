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
