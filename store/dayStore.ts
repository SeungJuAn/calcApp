import { create } from "zustand";

interface DayState {
  dayNum: number;
  monthNum: number;
  setDayIncrease: (day: number) => void;
  setDayDecrease: (day: number) => void;
  setMonthIncrease: (month: number) => void;
  setMonthDecrease: (month: number) => void;
}

const useDayStore = create<DayState>((set) => ({
  dayNum: 0,
  monthNum: 0,

  setDayIncrease: (day: number) =>
    set((state) => ({ dayNum: state.dayNum + day })),

  setDayDecrease: (day: number) =>
    set((state) => ({ dayNum: state.dayNum - day })),

  setMonthIncrease: (month: number) =>
    set((state) => ({ monthNum: state.monthNum + month })),

  setMonthDecrease: (month: number) =>
    set((state) => ({ monthNum: state.monthNum - month })),
}));

export default useDayStore;
