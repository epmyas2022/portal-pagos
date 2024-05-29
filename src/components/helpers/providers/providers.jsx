import { createContext, useContext } from "react";

const SlotContext = createContext();

export const SlotProvider = ({ value, children }) => {
  return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>;
};

export const useSlot = () => useContext(SlotContext);
