import React, {createContext, useState} from "react";
import {DRUGS} from "../constants/data";
import {Keyboard} from "react-native";
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [bodyWeight, setBodyWeight] = useState("");
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const weightInputHandler = (enteredText) => {
    const komma = enteredText.replace(",", ".");
    setBodyWeight(komma);
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
    selectedDrugs,
    setSelectedDrugs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
