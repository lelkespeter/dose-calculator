import React, {createContext, useState} from "react";
import {DRUGS} from "../constants/data";
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [bodyWeight, setBodyWeight] = useState("");
  const [show, setShow] = useState(false);

  const weightInputHandler = (enteredText) => {
    setBodyWeight(enteredText);
  };

  const value = {
    bodyWeight,
    weightInputHandler,
    show,
    setShow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
