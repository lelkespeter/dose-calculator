import React, {createContext, useState} from "react";
import {DRUGS} from "../constants/data";
import {Keyboard} from "react-native";
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [bodyWeight, setBodyWeight] = useState("");
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const weightInputHandler = (enteredText) => {
    setBodyWeight(enteredText);
  };
  const searchHandler = (enteredText) => {
    setSearchQuery(enteredText);
  };

  const value = {
    bodyWeight,
    weightInputHandler,
    show,
    setShow,
    searchQuery,
    setSearchQuery,
    searchHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
