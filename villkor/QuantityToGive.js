import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const QuantityToGive = (selectedDrug) => {
  const {bodyWeight} = useContext(AppContext);
  const w = +bodyWeight;
  const strength = selectedDrug.styrka.charAt(selectedDrug.styrka.length - 5);
  const numStrength = parseFloat(selectedDrug.styrka);

  const c1 = strength === "m";
  const c2 = selectedDrug.dosiMg;
  const c3 = selectedDrug.dosiMg_2;
  const c4 = selectedDrug.dosIµG;
  const c5 = selectedDrug.dosIµG_2;
  const c6 = selectedDrug.dosIµG_3;
  const c7 = selectedDrug.styrka;

  let dos;

  if (c1 && c4) {
    dos = `dos:  ${(c4 * w).toFixed(0)} ${c4 ? "µg" : null}`;
  } else if (c1 && c2) {
    dos = `dos:  ${(c2 * w).toFixed(0)} ${c2 ? "mg" : null}`;
  } else {
    dos = `dos: ${(c4 * w).toFixed(0)} ${c4 ? "µg" : null}`;
  }

  return dos;
};

export default QuantityToGive;

const styles = StyleSheet.create({});
