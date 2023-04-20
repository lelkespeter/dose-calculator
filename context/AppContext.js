import React, {createContext, useState} from "react";
import {DRUGS} from "../constants/data";
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [weight, setWeight] = useState("");
  const [pressed, setPressed] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [selected, setSelected] = useState([]);

  // const onAddSelected = (drugId) => {
  //   const drug = DRUGS.find((lm) => lm.drugId === drugId);
  //   setSelected((prevSelected) => [...prevSelected, drug]);
  //   console.log(drug);
  // };

  console.log("DRUGS:", DRUGS);

  const handleDrugClick = (drugId) => {
    const drug = DRUGS.find((lm) => lm.drugId === drugId);
    setSelected((prevSelected) => [...prevSelected, drug]);
  };

  const weightInputHandler = (enteredText) => {
    setWeight(enteredText);
  };

  const value = {
    weight,
    weightInputHandler,
    selected,

    handleDrugClick,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
