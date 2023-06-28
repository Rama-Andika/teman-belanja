import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider value={{ screenSize, setScreenSize, initialState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
