import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [active, setActive] = useState(false);
  const [image, setImage] = useState();
  const [test, setTest] = useState()
  const [temp, setTemp] = useState("")

  return (
    <StateContext.Provider value={{ screenSize, setScreenSize, initialState, image, setImage, test, setTest, temp, setTemp, active, setActive }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
